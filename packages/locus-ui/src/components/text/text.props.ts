import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const TextAs = ["p", "span", "div"] as const;

const TextPropsDefs = {
  disabled: {
    type: "boolean",
    dataAttr: "disabled",
  } satisfies PropDef<boolean>,
  /**
   * Defines whether the Text is rendered as a **p**, **span** or **div**.
   *
   * @example
   * as="p"
   * as="span"
   * as="div"
   */
  as: {
    type: "enum",
    values: TextAs,
    default: "p",
  } satisfies PropDef<(typeof TextAs)[number]>,
};

type TextInternalProps = GetPropDefTypes<typeof TextPropsDefs>;

export { TextInternalProps, TextPropsDefs };
