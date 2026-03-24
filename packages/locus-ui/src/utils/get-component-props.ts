import clsx from "clsx";
import { PropDef } from "../props";

export function getComponentProps<
  P extends {
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  },
  T extends Record<string, PropDef>[],
>(props: P, ...propDefs: T) {
  let style: React.CSSProperties = props.style ?? {};
  const classNames: string[] = props.className ? [props.className] : [];
  const dataAttrs: Record<string, string> = {};
  const extractedProps: Record<string, any> = {};

  const allProps = Object.assign({}, ...propDefs);
  const propKeys = Object.keys(allProps);

  // Create a copy of props excluding the component-specific props
  const restProps = { ...props };
  delete restProps.className;
  delete restProps.style;

  for (const key of propKeys) {
    const prop = allProps[key];
    const value = props?.[key];

    // Remove the processed prop from restProps
    delete restProps[key];

    // Store the value for non-enum props (boolean, string, function)
    if (
      prop.type === "boolean" ||
      prop.type === "string" ||
      prop.type === "number" ||
      prop.type === "value | array" ||
      prop.type === "reactNode" ||
      prop.type === "function"
    ) {
      extractedProps[key] = value;

      if (prop.cssProperty && value !== undefined && value !== null) {
        style = {
          ...style,
          [prop.cssProperty]:
            prop.type === "boolean" ? (value ? "1" : "0") : value,
        };
      }

      if (prop.dataAttr) {
        if (value) dataAttrs[`data-${prop.dataAttr}`] = value;
        else if (prop.default !== undefined) {
          dataAttrs[`data-${prop.dataAttr}`] = prop.default;
        }
      }

      continue;
    }

    const applyValue = (propValue: any, breakpoint?: string) => {
      const usedBreakpoint = breakpoint ? `-${breakpoint}` : "";

      if (prop.type === "enum" || prop.type === "enum | string") {
        if (propValue !== null && propValue !== undefined) {
          if (!breakpoint) extractedProps[key] = propValue;

          if (!prop.values.includes(propValue)) {
            const transformedValue =
              "transform" in prop && prop.transform
                ? prop.transform(propValue)
                : propValue;

            if (prop.className) {
              classNames.push(
                breakpoint ? `${prop.className}-${breakpoint}` : prop.className,
              );
              style = {
                ...style,
                [`--custom-${key}${usedBreakpoint}`]: transformedValue,
              };
            }

            if (prop.dataAttr) {
              dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = propValue;
            }
          } else if (prop.dataAttr) {
            if (propValue === "inherit" && prop.className) {
              classNames.push(prop.className);
            }

            dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = propValue;
          }
        } else if (prop.dataAttr && prop.default) {
          if (!breakpoint) extractedProps[key] = prop.default;
          if (prop.dataAttr) {
            dataAttrs[`data-${prop.dataAttr}${usedBreakpoint}`] = prop.default;
          }
        }
      }
    };

    if (
      "responsive" in prop &&
      prop.responsive &&
      value &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      // Apply breakpoint-specific values
      for (const [bp, bpValue] of Object.entries(value)) {
        applyValue(bpValue, bp);
      }

      if ("dataAttr" in prop && prop.dataAttr) {
        dataAttrs[`data-${prop.dataAttr}`] = "";
      }
    } else applyValue(value);
  }

  return {
    ...restProps,
    ...extractedProps,
    style,
    dataAttrs,
    className: clsx(classNames),
  };
}
