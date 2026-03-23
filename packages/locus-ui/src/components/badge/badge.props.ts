import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const BadgeVariants = ["solid", "outlined", "muted", "clear"] as const;

const BadgeRootPropsDefs = {
  /**
   * Sets the variant style of the badge ("solid", "outlined", "muted", or "clear").
   */
  variant: {
    type: "enum",
    values: BadgeVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof BadgeVariants)[number]>,
} as const;

type BadgeRootInternalProps = GetPropDefTypes<typeof BadgeRootPropsDefs>;

export { BadgeRootInternalProps, BadgeRootPropsDefs, BadgeVariants };
