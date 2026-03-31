const importSnippet = `import { Badge } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Badge variant="solid">
  Top Subscriber
</Badge>`;

export const styleSnippet = `.badge[data-variant] {
  --badge-color: var(--color, var(--primary));

  display: flex;
  align-items: center;
  height: fit-content;
  cursor: pointer;
  border-radius: var(--lcs-radius, 1);

  padding: calc(1px * var(--lcs-spacing, 1)) calc(6px * var(--lcs-spacing, 1));
  gap: calc(5px * var(--lcs-spacing, 1));
  font-size: small;

  &[data-variant="solid"] {
    border: 1px solid rgba(var(--badge-color), 0.8);
    background-color: rgba(var(--badge-color), 0.7);
    color: white;
  }
}
`;

export const anatomySnippet = `${importSnippet}
        
<Badge />
`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted", "clear"];

return variants.map((variant) => (
  <Badge key={variant} variant={variant}>
    {variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
  </Badge>
));`;

export const colorsSnippet = `${importSnippet}

const colors = [
  "primary", "secondary", "tertiary",
  "success", "danger", "warning", "info",
];

return colors.map((color) => (
  <Badge key={color} color={color} variant="muted">
    {color.charAt(0).toUpperCase() + color.slice(1)} Badge
  </Badge>
));`;

export const sizesSnippet = `${importSnippet}

const sizes = ["xs", "sm", "md", "lg", "xl"];

return sizes.map((size) => (
  <Badge key={size} size={size} variant="muted">
    {size.toUpperCase()} Badge
  </Badge>
));`;

export const colorInheritanceSnippet = `${importSnippet}

const CheckMark = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4669 3.72684..."
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

const variants = ["solid", "outlined", "muted", "clear"];

return variants.map((variant) => (
  <Badge key={variant} variant={variant} color="success">
    Verified
    <CheckMark />
  </Badge>
));`;
