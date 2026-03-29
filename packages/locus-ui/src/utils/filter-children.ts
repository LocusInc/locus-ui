import * as React from "react";

/**
 * Type utility to restrict children to specific React element types.
 * Use with Omit<Props, 'children'> & StrictChildren<AllowedProps>
 *
 * @example
 * type MyComponentProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>
 *   & StrictChildren<ChildAProps | ChildBProps>;
 */
export type StrictChildren<AllowedChildProps> = {
  children:
    | React.ReactElement<AllowedChildProps>
    | React.ReactElement<AllowedChildProps>[];
};

/**
 * Type utility to replace the children prop with strictly typed children.
 * Combines Omit and StrictChildren in one step.
 *
 * @example
 * type MyComponentProps = WithStrictChildren<
 *   React.HTMLAttributes<HTMLDivElement>,
 *   ChildAProps | ChildBProps
 * >;
 */
export type WithStrictChildren<
  Props extends { children?: React.ReactNode },
  AllowedChildProps,
> = Omit<Props, "children"> & StrictChildren<AllowedChildProps>;

/**
 * Like WithStrictChildren, but children are optional.
 * When provided, children are still restricted to the allowed types.
 */
export type WithOptionalStrictChildren<
  Props extends { children?: React.ReactNode },
  AllowedChildProps,
> = Omit<Props, "children"> & Partial<StrictChildren<AllowedChildProps>>;

export interface FilterChildrenOptions {
  /** The parent component's displayName (for error/warning messages) */
  parentDisplayName?: string;
  /** If true, throws an error for invalid children instead of warning */
  strict?: boolean;
  /** Component references to match against (for RSC-serialized children whose displayName may not be accessible) */
  allowedTypes?: React.ComponentType[];
}

/**
 * Filters React children to only include allowed components based on displayName
 * or direct type reference comparison.
 * Logs a warning or throws an error for any invalid children.
 *
 * @param children - The children to filter
 * @param allowedDisplayNames - Array of allowed component displayNames
 * @param options - Configuration options
 * @returns Filtered array of valid children
 */
/**
 * Normalizes a component name by stripping dots and lowercasing,
 * so "Switch.Label" and "SwitchLabel" both become "switchlabel".
 */
function normalizeName(name: string): string {
  return name.replace(/\./g, "").toLowerCase();
}

/**
 * Extracts the RSC `_payload` object from a lazy module reference, if present.
 */
function getPayload(type: unknown): Record<string, unknown> | undefined {
  const payload = (type as Record<string, unknown>)?._payload;
  if (payload && typeof payload === "object") {
    return payload as Record<string, unknown>;
  }
  return undefined;
}

/**
 * Attempts to extract the export name from an RSC-serialized lazy module
 * reference. In Next.js RSC, client components serialized across the
 * server/client boundary have a `_payload` with the export name at index 2.
 */
function getPayloadExportName(type: unknown): string | undefined {
  const payload = getPayload(type);
  if (payload?.status === "resolved_module" && Array.isArray(payload.value)) {
    const name = (payload.value as unknown[])[2];
    if (typeof name === "string") return name;
  }
  return undefined;
}

/**
 * Attempts to get the resolved component from an RSC lazy module reference
 * whose payload has already been fulfilled. When the lazy reference resolves,
 * `_payload.value` becomes the actual component function/object.
 */
function getPayloadResolvedValue(
  type: unknown,
): React.ComponentType | undefined {
  const payload = getPayload(type);
  if (payload?.status === "fulfilled" && payload.value != null) {
    const val = payload.value;
    if (typeof val === "function" || typeof val === "object") {
      return val as React.ComponentType;
    }
  }
  return undefined;
}

export function filterChildren(
  children: React.ReactNode,
  allowedDisplayNames: string[],
  options: FilterChildrenOptions = {},
): React.ReactNode[] {
  const { parentDisplayName, strict = false, allowedTypes } = options;

  const normalizedAllowed = allowedDisplayNames.map(normalizeName);

  return React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return false;

    const childType = child.type as React.ComponentType;
    const displayName = childType?.displayName;

    // Match by displayName
    if (displayName && allowedDisplayNames.includes(displayName)) {
      return true;
    }

    // Match by direct type reference (handles RSC-serialized client components
    // whose displayName may not be accessible across the server/client boundary)
    if (allowedTypes?.includes(childType)) {
      return true;
    }

    // Match by RSC payload export name (handles RSC-serialized client components
    // where the export name e.g. "SwitchLabel" differs from the displayName
    // e.g. "Switch.Label")
    const exportName = getPayloadExportName(childType);
    if (exportName && normalizedAllowed.includes(normalizeName(exportName))) {
      return true;
    }

    // Match by resolved value from a fulfilled RSC lazy reference
    const resolved = getPayloadResolvedValue(childType);
    if (resolved) {
      if (allowedTypes?.includes(resolved)) return true;
      const resolvedName = resolved.displayName;
      if (resolvedName && allowedDisplayNames.includes(resolvedName))
        return true;
      if (
        resolvedName &&
        normalizedAllowed.includes(normalizeName(resolvedName))
      )
        return true;
    }

    const parent = parentDisplayName ?? "Component";
    const childName =
      displayName || exportName || resolved?.displayName || "Unknown";
    const allowed = allowedDisplayNames.join(", ");

    const message =
      `${parent}: Invalid child "${childName}" (${JSON.stringify(childType)})${
        strict ? "" : " was filtered out"
      }. ` + `Only ${allowed} are allowed as direct children.`;

    if (strict) throw new Error(message);
    console.warn(message);

    return false;
  });
}

/**
 * Checks if a child element's type matches a given component, handling
 * RSC-serialized lazy module references where displayName and direct
 * reference comparison may not work.
 */
export function matchesComponent(
  childType: unknown,
  component: React.ComponentType,
): boolean {
  if (childType === component) return true;

  const childDisplayName = (childType as React.ComponentType)?.displayName;
  const componentDisplayName = component.displayName;
  if (
    childDisplayName &&
    componentDisplayName &&
    childDisplayName === componentDisplayName
  )
    return true;

  const exportName = getPayloadExportName(childType);
  if (
    exportName &&
    componentDisplayName &&
    normalizeName(exportName) === normalizeName(componentDisplayName)
  )
    return true;

  // Match by resolved value from a fulfilled RSC lazy reference
  const resolved = getPayloadResolvedValue(childType);
  if (resolved) {
    if (resolved === component) return true;
    if (
      resolved.displayName &&
      componentDisplayName &&
      resolved.displayName === componentDisplayName
    )
      return true;
  }

  return false;
}
