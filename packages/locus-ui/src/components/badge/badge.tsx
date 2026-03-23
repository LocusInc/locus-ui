import clsx from "clsx";
import {
  ColorProp,
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  RadiusPropDefs,
  RadiusProps,
  SizeProp,
  SizePropDef,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { BadgeRootInternalProps, BadgeRootPropsDefs } from "./badge.props";

interface AllBadgeRootProps
  extends
    BadgeRootInternalProps,
    ColorProp,
    MarginProps,
    PaddingProps,
    RadiusProps,
    SizeProp {}

type BadgeRootProps = AllBadgeRootProps & React.HTMLAttributes<HTMLDivElement>;

const Badge: React.FC<BadgeRootProps> = (props) => {
  const { color, variant, className, dataAttrs, ...rest } = getComponentProps(
    props,
    BadgeRootPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    RadiusPropDefs,
    SizePropDef,
  );

  return (
    <div
      className={clsx("badge", className)}
      data-color={color ?? true}
      data-variant={variant}
      {...dataAttrs}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export { AllBadgeRootProps, Badge, BadgeRootProps };
