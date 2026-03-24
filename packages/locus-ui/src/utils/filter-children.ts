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
  AllowedChildProps
> = Omit<Props, "children"> & StrictChildren<AllowedChildProps>;

/**
 * Like WithStrictChildren, but children are optional.
 * When provided, children are still restricted to the allowed types.
 */
export type WithOptionalStrictChildren<
  Props extends { children?: React.ReactNode },
  AllowedChildProps
> = Omit<Props, "children"> & Partial<StrictChildren<AllowedChildProps>>;

export interface FilterChildrenOptions {
  /** The parent component's displayName (for error/warning messages) */
  parentDisplayName?: string;
  /** If true, throws an error for invalid children instead of warning */
  strict?: boolean;
}

/**
 * Filters React children to only include allowed components based on displayName.
 * Logs a warning or throws an error for any invalid children.
 *
 * @param children - The children to filter
 * @param allowedDisplayNames - Array of allowed component displayNames
 * @param options - Configuration options
 * @returns Filtered array of valid children
 */
export function filterChildren(
  children: React.ReactNode,
  allowedDisplayNames: string[],
  options: FilterChildrenOptions = {}
): React.ReactNode[] {
  const { parentDisplayName, strict = false } = options;

  return React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return false;

    const childType = child.type as React.ComponentType;
    const displayName = childType?.displayName;

    if (!displayName || !allowedDisplayNames.includes(displayName)) {
      const parent = parentDisplayName ?? "Component";
      const childName = displayName || "Unknown";
      const allowed = allowedDisplayNames.join(", ");

      const message =
        `${parent}: Invalid child "${childName}"${
          strict ? "" : " was filtered out"
        }. ` + `Only ${allowed} are allowed as direct children.`;

      if (strict) throw new Error(message);
      console.warn(message);

      return false;
    }

    return true;
  });
}
