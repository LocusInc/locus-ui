const importSnippet = `import { Button } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Button variant="solid">
  Solid Button
</Button>`;

export const styleSnippet = `.button[data-variant] {
  --button-color: var(--color, var(--primary));

  height: fit-content;
  font-size: medium;
  border-radius: var(--lcs-radius, 1);
  padding: calc(4px * var(--lcs-spacing, 1)) calc(8px * var(--lcs-spacing, 1));
  gap: calc(8px * var(--lcs-spacing, 1));
  cursor: pointer;

  &[data-variant="solid"] {
    border: 1px solid rgba(var(--button-color), 0.8);
    background-color: rgba(var(--button-color), 0.9);
  }
}
`;

export const anatomySnippet = `${importSnippet}
        
<Button />
`;

export const variantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted", "clear"];

return variants.map((variant) => (
  <Button key={variant} variant={variant}>
    {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
  </Button>
));`;

export const colorsSnippet = `${importSnippet}

const colors = [
  "primary", "secondary", "tertiary", "accent",
  "success", "danger", "warning", "info",
];

return colors.map((color) => (
  <Button key={color} color={color} variant="muted">
    {color.charAt(0).toUpperCase() + color.slice(1)} Button
  </Button>
));`;

export const sizesSnippet = `${importSnippet}

const sizes = ["xs", "sm", "md", "lg", "xl"];

return sizes.map((size) => (
  <Button key={size} size={size} variant="muted">
    {size.toUpperCase()} Button
  </Button>
));`;

export const statesSnippet = `${importSnippet}

<Button variant="solid">Default</Button>
<Button variant="solid" disabled>Disabled</Button>
<Button variant="solid" readonly>Readonly</Button>`;

export const disabledVariantsSnippet = `${importSnippet}

const variants = ["solid", "outlined", "muted", "clear"];

return variants.map((variant) => (
  <Button disabled key={variant} variant={variant}>
    {variant.charAt(0).toUpperCase() + variant.slice(1)} Disabled
  </Button>
));`;

export const highContrastSnippet = `${importSnippet}

<Button highContrast variant="solid">
  High Contrast
</Button>`;
