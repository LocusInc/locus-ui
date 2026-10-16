# Locus UI documentation

Run `npm run dev` from the repository root, or `npm run dev --workspace apps/docs` to run only the documentation app.

Each route has a single `src/app/docs/<section>/<name>/page.mdx` file. Keep prose, live React examples, example data, and code snippets together. Shared documentation components remain in `src/components`.

## Writing a page

Write JSX examples once in a fenced `jsx` block. The docs compile the JSX into a live preview and display the exact same source underneath it, with syntax highlighting and a copy control:

````mdx
import { Badge, Flex } from "@locus-ui/components";

# Badge

Stylized labels for status and categories.

```jsx
<Flex gap="2">
  <Badge color="orange">In progress</Badge>

  <Badge color="blue">In review</Badge>

  <Badge color="green">Complete</Badge>
</Flex>
```
````

Import the UI components used by each page at the top of its MDX file, including those used inside JSX fences. Custom components can be imported or declared as helpers in the same page. UI components are not registered globally in `mdx-components.tsx`. Preview fences contain JSX markup, so no enclosing function or return is needed. Compilation happens at build time, without evaluating code in the browser.

- `jsx` fences containing markup render a preview automatically.
- `jsx featured` adds the gradient background to the live preview.
- `jsx code` displays source only, useful for anatomy examples.
- A `css preview` fence immediately after a JSX preview adds a `styles.css` tab to that preview. Ordinary `css` fences remain standalone code blocks.
- `tsx` fences display source only by default; use `tsx preview` for JSX markup that should render a preview.
- Complete modules, functions, imports, and setup belong outside preview fences or in code-only examples.
- Other languages such as `bash` and `css` remain highlighted code blocks.

All documentation previews use fenced JSX. CSS examples appear in preview source tabs. Client component implementations are kept in expandable sections where needed. `PreviewBox` and `CodeBox` render the previews and highlighted source behind the scenes. Shared documentation components remain in `src/components`.

## Markdown view

Every MDX page automatically gets a **View as Markdown** link, for example `/markdown/docs/components/button`. This opens plain text with prose, fenced example code, and property tables. Page imports, exports, and interactive preview wrappers are omitted. Custom React examples without snippets are retained as fenced JSX; semantic HTML such as `<kbd>` is preserved. The plain-text routes are prerendered during production builds.

Markdown routes read directly from each `page.mdx`, so there is no second document or generated public folder to maintain. The Markdown view reflects source edits during development and is prerendered for production. TSX-only app pages do not get a Markdown link.

The exporter reads static literals, template strings, arrays, and objects without executing JavaScript. Use these for snippets and property-table data; unsupported data used in an export fails Markdown rendering. When adding a new documentation wrapper, add its Markdown representation to `src/lib/markdown.mjs`.

Run `npm run build --workspace apps/docs` to build the library, documentation site, and plain-text Markdown routes.
