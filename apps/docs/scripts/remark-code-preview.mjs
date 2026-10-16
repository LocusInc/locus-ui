import { createProcessor } from "@mdx-js/mdx";

// Compile local JSX fences as MDX at build time; no browser-side evaluation.
export default function remarkCodePreview() {
  return (tree, file) => {
    function visit(parent) {
      for (let index = 0; index < (parent.children?.length ?? 0); index++) {
        const node = parent.children[index];
        if (node.type !== "code") {
          visit(node);
          continue;
        }
        const options = new Set((node.meta ?? "").split(/\s+/));
        const preview =
          node.lang === "jsx" ||
          (node.lang === "tsx" && options.has("preview"));
        if (!preview || options.has("code")) continue;
        // Full modules and functions remain code-only. Previews contain JSX.
        if (!node.value.trimStart().startsWith("<")) {
          if (options.has("preview")) {
            file.fail(
              "Preview fences must contain JSX markup. Declare imports and helper components outside the fence.",
              node,
            );
          }
          continue;
        }

        let fragment;
        try {
          // An MDX expression preserves pure JSX children instead of inserting
          // Markdown paragraph wrappers inside layout components.
          fragment = createProcessor().parse(`{(\n<>\n${node.value}\n</>\n)}`)
            .children[0];
        } catch (error) {
          file.fail(`Cannot compile JSX preview: ${error.message}`, node);
        }
        const next = parent.children[index + 1];
        const hasStyles =
          next?.type === "code" &&
          next.lang === "css" &&
          (next.meta ?? "").split(/\s+/).includes("preview");
        parent.children[index] = {
          type: "mdxJsxFlowElement",
          name: "PreviewBox",
          attributes: [
            { type: "mdxJsxAttribute", name: "code", value: node.value },
            ...(hasStyles
              ? [{ type: "mdxJsxAttribute", name: "styles", value: next.value }]
              : []),
            ...(options.has("featured")
              ? [{ type: "mdxJsxAttribute", name: "featured", value: null }]
              : []),
          ],
          children: [fragment],
          position: node.position,
        };
        if (hasStyles) parent.children.splice(index + 1, 1);
      }
    }
    visit(tree);
  };
}
