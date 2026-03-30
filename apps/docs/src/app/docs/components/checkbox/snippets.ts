const importSnippet = `import { Checkbox } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

<Checkbox variant="outlined">
  <Checkbox.Label>Accept Terms</Checkbox.Label>
</Checkbox>`;

export const styleSnippet = `.checkbox-root[data-variant="outlined"] {
  display: flex;
  flex-direction: row;
  gap: calc(12px * var(--lcs-spacing, 1));
  cursor: pointer;

  &:not([data-align]) {
    align-items: center;
  }

  &[data-disabled="true"],
  &[data-readonly="true"] {
    cursor: not-allowed !important;
  }

  &[data-disabled="true"] {
    opacity: 0.6;
  }
}

.checkbox-indicator[data-variant="outlined"] {
  --checkbox-color: var(--color, var(--primary));

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: calc(20px * var(--lcs-spacing, 1));
  width: calc(20px * var(--lcs-spacing, 1));
  height: calc(20px * var(--lcs-spacing, 1));
  border: 1px solid transparent;
  border-radius: max(5px, var(--lcs-radius, 0px));
  overflow: hidden;
  transition: background-color 100ms, border-color 100ms;

  background-color: rgba(var(--panel-color), 0.8);

  &:not([data-checked="true"]) {
    border-color: rgb(var(--border-color));
  }

  &[data-checked="true"],
  &[data-indeterminate="true"] {
    border-color: rgb(var(--checkbox-color));

    & > svg > path {
      fill: rgb(var(--checkbox-color));
    }
  }

  &[data-hovered="true"]:not([data-disabled="true"], [data-readonly="true"]) {
    border-color: rgba(var(--checkbox-color), 0.7);
  }

  &:focus:not([data-disabled="true"], [data-readonly="true"]) {
    outline: 1px solid rgba(var(--checkbox-color), 0.9);
    border-color: rgba(var(--checkbox-color), 0.7);
  }
}
`;

export const anatomySnippet = `${importSnippet}
        
<Checkbox>
  <Checkbox.Indicator />
  <Checkbox.Label />
</Checkbox>
`;

export const variantsSnippet = `${importSnippet}

const variants = ["outlined", "solid", "muted"];

return variants.map((variant) => (
  <Checkbox key={variant} variant={variant}>
    <Checkbox.Label>{variant}</Checkbox.Label>
  </Checkbox>
));`;

export const labelPositionsSnippet = `${importSnippet}

const labelPositions = ["top", "bottom", "left", "right"];

return labelPositions.map((position) => (
  <Checkbox key={position} variant="muted">
    <Checkbox.Label position={position}>
      {position.charAt(0).toUpperCase() + position.slice(1)} Label
    </Checkbox.Label>
  </Checkbox>
));`;

export const sizesSnippet = `${importSnippet}

const sizes = ["xs", "sm", "md", "lg", "xl"];

return (
  <>
    {sizes.map((size) => (
      <Checkbox key={size} size={size} variant="muted">
        <Checkbox.Label>{size}</Checkbox.Label>
      </Checkbox>
    ))}
    <Checkbox size="40px" variant="muted">
      <Checkbox.Label>Custom Size</Checkbox.Label>
    </Checkbox>
  </>
);`;

export const colorsSnippet = `${importSnippet}

const colors = [
  "primary", "secondary", "tertiary", "accent",
  "success", "danger", "warning", "info",
];

return colors.map((color) => (
  <Checkbox defaultChecked key={color} variant="muted" color={color}>
    <Checkbox.Label>{color}</Checkbox.Label>
  </Checkbox>
));`;

export const alignmentsSnippet = `${importSnippet}

const alignments = ["start", "center", "end"];

return alignments.map((alignment) => (
  <Checkbox key={alignment} align={alignment} variant="muted">
    <Checkbox.Label>
      {alignment} alignment. This alignment puts the components in the
      {alignment} position relative to each other.
    </Checkbox.Label>
  </Checkbox>
));`;

export const statesSnippet = `${importSnippet}

<Checkbox disabled variant="muted">
  <Checkbox.Label>Disabled</Checkbox.Label>
</Checkbox>
<Checkbox readonly variant="muted">
  <Checkbox.Label>Readonly</Checkbox.Label>
</Checkbox>
<Checkbox defaultChecked variant="muted">
  <Checkbox.Label>Default Checked</Checkbox.Label>
</Checkbox>`;

export const indeterminateSnippet = `${importSnippet}

const variants = ["outlined", "solid", "muted"];

return variants.map((variant) => (
  <Checkbox key={variant} variant={variant} indeterminate>
    <Checkbox.Label>{variant}</Checkbox.Label>
  </Checkbox>
));`;

export const highContrastSnippet = `${importSnippet}

<Checkbox defaultChecked highContrast variant="solid">
  <Checkbox.Label>Solid</Checkbox.Label>
</Checkbox>
<Checkbox indeterminate highContrast variant="solid">
  <Checkbox.Indicator />
  <Checkbox.Label>Solid Indeterminate</Checkbox.Label>
</Checkbox>`;
