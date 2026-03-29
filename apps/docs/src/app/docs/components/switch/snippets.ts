const importSnippet = `import { Switch } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

<Switch.Root variant="outlined">
  <Switch.Label>Show All</Switch.Label>
</Switch.Root>`;

export const styleSnippet = `.switch-root[data-variant="outlined"] {
  display: flex;
  flex-direction: row;
  gap: calc(12px * var(--lcs-spacing, 1));
  cursor: pointer;
  
  .switch-container {
    overflow: hidden;
    border-radius: 32px;
    width: calc(44px * var(--lcs-spacing, 1));
    min-width: calc(44px * var(--lcs-spacing, 1));

    &[data-focused="true"] {
      outline: 1px solid rgba(var(--switch-color), 0.8);
      outline-offset: 0.5px;
    }
    
    &[data-variant="outlined"] {
      background-color: rgba(var(--panel-color), 0.4);
      border: 2px solid rgb(var(--panel-color));
      transition: background-color 100ms;
    }
  }
}

.switch-indicator[data-variant="outlined"] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: calc(20px * var(--lcs-spacing, 1));
  height: calc(20px * var(--lcs-spacing, 1));
  min-width: calc(12px * var(--lcs-spacing, 1));
  min-height: calc(12px * var(--lcs-spacing, 1));
  border: 1px solid transparent;
  border-radius: 100%;
  transition:
    background-color 100ms,
    border-color 100ms,
    margin 100ms;

  &[data-checked="true"] {
    margin-left: 50%;
  }

  /* Indicator background */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -50%);
    width: 200%;
    height: 200%;
    pointer-events: none;
    opacity: 0;
    transition:
      opacity 100ms,
      background-color 100ms;
  }

  &[data-checked="true"]::before {
    opacity: 1;
  }

  /* Indicator face (renders above ::before track fill) */
  &::after {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background-color: inherit;
    pointer-events: none;
    transition: background-color 100ms;
  }

  &[data-variant="outlined"] {
    outline: none;
    background-color: rgb(222, 222, 222);

    &::before {
      background-color: rgba(var(--switch-color), 0.2);
    }

    &[data-checked="true"] {
      background-color: rgb(222, 222, 222);
    }

    &:not([data-disabled="true"], [data-readonly="true"]) {
      &[data-hovered="true"],
      &[data-focused="true"] {
        &::before {
          background-color: rgba(var(--switch-color), 0.7);
        }
      }
    }
  }
}
`;

export const anatomySnippet = `${importSnippet}
        
<Switch.Root>
  <Switch.Label />
</Switch.Root>
`;

export const variantsSnippet = `${importSnippet}

const variants = ["outlined", "solid", "muted"];

return variants.map((variant) => (
  <Switch.Root key={variant} variant={variant}>
    <Switch.Label>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Switch
    </Switch.Label>
  </Switch.Root>
));`;

export const labelPositionsSnippet = `${importSnippet}

const labelPositions = ["top", "bottom", "left", "right"];

return labelPositions.map((position) => (
  <Switch.Root key={position} variant="outlined">
    <Switch.Label position={position}>
      {position.charAt(0).toUpperCase() + position.slice(1)} Label
    </Switch.Label>
  </Switch.Root>
));`;

export const sizesSnippet = `${importSnippet}

const sizes = ["xs", "sm", "md", "lg", "xl"];

return (
  <>
    {sizes.map((size) => (
      <Switch.Root key={size} size={size} variant="muted">
        <Switch.Label>{size.toUpperCase()}</Switch.Label>
      </Switch.Root>
    ))}
    <Switch.Root size="80px" variant="muted">
      <Switch.Label>Custom Size</Switch.Label>
    </Switch.Root>
  </>
);`;

export const colorsSnippet = `${importSnippet}

const colors = [
  "primary", "secondary", "tertiary", "accent",
  "success", "danger", "warning", "info",
];

return colors.map((color) => (
  <Switch.Root defaultChecked key={color} variant="muted" color={color}>
    <Switch.Label>
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </Switch.Label>
  </Switch.Root>
));`;

export const alignmentsSnippet = `${importSnippet}

const alignments = ["start", "center", "end"];

return alignments.map((alignment) => (
  <Switch.Root
    key={alignment}
    align={alignment}
    variant="muted"
    className="w-1/4"
  >
    <Switch.Label>
      This switch is {alignment} aligned relative to its label.
    </Switch.Label>
  </Switch.Root>
));`;

export const statesSnippet = `${importSnippet}

<Switch.Root disabled variant="muted">
  <Switch.Label>Disabled</Switch.Label>
</Switch.Root>
<Switch.Root readonly variant="muted">
  <Switch.Label>Readonly</Switch.Label>
</Switch.Root>
<Switch.Root defaultChecked variant="muted">
  <Switch.Label>Default Checked</Switch.Label>
</Switch.Root>`;
