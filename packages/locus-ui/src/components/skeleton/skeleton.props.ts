import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const SkeletonVariants = ["pulse", "shimmer", "solid"] as const;

const SkeletonPropsDefs = {
  /**
   * Sets the variant of the skeleton.
   */
  variant: {
    type: "enum",
    values: SkeletonVariants,
    dataAttr: "variant",
    responsive: true,
  } satisfies PropDef<(typeof SkeletonVariants)[number]>,

  /**
   * Sets what the skeleton displays based on the loading state.
   * If `false`, the skeleton's children will be displayed instead of the skeleton.
   */
  loading: {
    type: "boolean",
    dataAttr: "loading",
  } satisfies PropDef<boolean>,
} as const;

type SkeletonInternalProps = GetPropDefTypes<typeof SkeletonPropsDefs>;

export { SkeletonInternalProps, SkeletonPropsDefs };
