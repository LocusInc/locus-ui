import { createProcessor } from "@mdx-js/mdx";

// Read static documentation data without evaluating or executing page code.
function value(node, bindings) {
  if (!node) return undefined;
  switch (node.type) {
    case "Literal": return node.value;
    case "Identifier":
      if (bindings.has(node.name)) return bindings.get(node.name);
      break;
    case "TemplateLiteral":
      return node.quasis.map((part, i) => part.value.cooked +
        (i < node.expressions.length ? value(node.expressions[i], bindings) : "")).join("");
    case "ArrayExpression": return node.elements.map((item) => value(item, bindings));
    case "ObjectExpression":
      return Object.fromEntries(node.properties.map((property) => {
        if (property.type !== "Property" || property.computed) {
          throw new Error("Markdown data must use static object properties");
        }
        return [property.key.name ?? property.key.value, value(property.value, bindings)];
      }));
    case "UnaryExpression":
      if (node.operator === "-") return -value(node.argument, bindings);
  }
  throw new Error(`Unsupported Markdown data: ${node.type}${node.name ? ` (${node.name})` : ""}`);
}

function fence(code, language = "tsx") {
  const ticks = "`".repeat(Math.max(3, ...Array.from(String(code).matchAll(/`+/g), (m) => m[0].length + 1)));
  return `${ticks}${language}\n${String(code).trim()}\n${ticks}`;
}

export function toMarkdown(source) {
  const tree = createProcessor().parse(source);
  const bindings = new Map();
  for (const node of tree.children) {
    if (node.type !== "mdxjsEsm") continue;
    for (const statement of node.data.estree.body) {
      const declaration = statement.declaration ?? statement;
      if (declaration.type !== "VariableDeclaration") continue;
      for (const item of declaration.declarations) {
        // Functions and other live-demo data are kept in MDX, never executed.
        try { bindings.set(item.id.name, value(item.init, bindings)); } catch { /* Not static data. */ }
      }
    }
  }

  const expression = (node) => value(node.data.estree.body[0].expression, bindings);
  const attribute = (node, name) => {
    const attr = node.attributes.find((item) => item.name === name);
    if (!attr) return undefined;
    return attr.value?.type === "mdxJsxAttributeValueExpression"
      ? expression(attr.value) : attr.value;
  };
  const raw = (node) => source.slice(node.position.start.offset, node.position.end.offset);
  const cell = (text) => String(text ?? "").replace(/\|/g, "\\|").replace(/\n/g, "<br>");

  function render(node) {
    if (node.type === "mdxjsEsm") return "";
    if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
      if (node.name === "ViewSourceLink") {
        return `[View Source](${attribute(node, "href")})`;
      }
      if (node.name === "CodeBox") {
        const content = node.children.filter((child) => child.type === "mdxFlowExpression" || child.type === "mdxTextExpression");
        if (content.length !== 1) throw new Error("CodeBox Markdown requires one static code expression");
        return fence(expression(content[0]), attribute(node, "language") ?? "text");
      }
      if (node.name === "PreviewBox" && attribute(node, "code") !== undefined) {
        const styles = attribute(node, "styles");
        return fence(attribute(node, "code")) + (styles === undefined ? "" : "\n\n" + fence(styles, "css"));
      }
      if (node.name === "PropertyTable") {
        return ["| Property | Type | Values | Default |", "| --- | --- | --- | --- |",
          ...attribute(node, "properties").map((property) =>
            `| ${[property.name, property.type, property.values, property.defaultValue].map(cell).join(" | ")} |`)].join("\n");
      }
      // Keep semantic inline HTML; expose custom demos as copyable JSX.
      if (node.name && /^[A-Z]/.test(node.name)) return fence(raw(node));
      return replaceChildren(node);
    }
    if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
      return String(expression(node));
    }
    return replaceChildren(node);
  }

  function replaceChildren(node) {
    let output = raw(node);
    for (const child of [...(node.children ?? [])].reverse()) {
      const start = child.position.start.offset - node.position.start.offset;
      const end = child.position.end.offset - node.position.start.offset;
      output = output.slice(0, start) + render(child) + output.slice(end);
    }
    return output;
  }

  return tree.children.map(render).filter(Boolean).join("\n\n").trim() + "\n";
}
