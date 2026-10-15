# Locus UI documentation

Run `npm run dev` from the repository root, or `npm run dev --workspace apps/docs` to run only the documentation app.

Each route has a single `src/app/docs/<section>/<name>/page.mdx` file. Keep prose, live React examples, example data, and code snippets together. Shared documentation components remain in `src/components`.

## Writing a page

MDX supports Markdown and imported React components. Standard fenced code blocks use the shared syntax-highlighted renderer automatically:

````mdx
import { Button } from "@locus-ui/components";
import { PreviewBox } from "@/components/preview-box";

export const example = `import { Button } from "@locus-ui/components";

export default function ButtonExample() {
  return <Button variant="solid">Save</Button>;
}`;

# Button

Trigger an action.

<PreviewBox title="example.tsx" code={example}>
  <Button variant="solid">Save</Button>
</PreviewBox>

## Installation

```bash
npm install @locus-ui/components
```
````

Declare reusable code strings with `export const` in the page. `ComponentPreview` supports multiple code tabs, `PreviewBox` supports collapsible example code, and `CodeBox` supports titled code blocks. Explicit snippets let examples include imports and setup that differ from the live preview's surrounding layout.

Write demo snippets as complete components with an explicit return and two-space indentation. Wrap sibling JSX elements in a fragment. Anatomy snippets can remain abbreviated to show component structure.

## Markdown view

Every MDX page automatically gets a **View as Markdown** link, for example `/markdown/docs/components/button`. This opens plain text with prose, fenced example code, and property tables. Page imports, exports, and interactive preview wrappers are omitted. Custom React examples without snippets are retained as fenced JSX; semantic HTML such as `<kbd>` is preserved. The plain-text routes are prerendered during production builds.

Markdown is generated from MDX, so there is no second document to maintain. Development watches MDX changes; production builds regenerate all exports. Generated files in `public/markdown` are ignored by Git. TSX-only app pages do not get a Markdown link.

The exporter reads static literals, template strings, arrays, and objects without executing JavaScript. Use these for snippets and property-table data; unsupported data used in an export fails generation with the page filename. When adding a new documentation wrapper, add its Markdown representation to `scripts/markdown.mjs`.

Run `npm run docs:markdown --workspace apps/docs` to regenerate exports. `npm run build --workspace apps/docs` builds the library and documentation site.
