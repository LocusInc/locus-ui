# Checkbox Component

A versatile Checkbox, managing state, context, and styling.

```tsx
import { Checkbox } from "@locus-ui/components";
import styles from "./styles.css";

export default function CheckboxExample() {
  return (
    <Checkbox variant="outlined">
      <Checkbox.Label>Accept Terms</Checkbox.Label>
    </Checkbox>
  );
}
```

```css
.checkbox-root[data-variant="outlined"] {
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
```

## Anatomy

Import the component and its parts:

```typescript
import { Checkbox } from "@locus-ui/components";

<Checkbox>
  <Checkbox.Indicator />
  <Checkbox.Label />
</Checkbox>;
```

## Examples

### Variants

Checkbox components come with three built in variants, `solid`, `outlined`, and `muted`.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxVariantsExample() {
  const variants = ["outlined", "solid", "muted"];

  return variants.map((variant) => (
    <Checkbox key={variant} variant={variant}>
      <Checkbox.Label>{variant}</Checkbox.Label>
    </Checkbox>
  ));
}
```

### Label Positions

The label element `<label>` is available in the checkbox component anatomy. If included it can be easily positioned with the `position` prop.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxLabelPositionsExample() {
  const labelPositions = ["top", "bottom", "left", "right"];

  return labelPositions.map((position) => (
    <Checkbox key={position} variant="muted">
      <Checkbox.Label position={position}>
        {position.charAt(0).toUpperCase() + position.slice(1)} Label
      </Checkbox.Label>
    </Checkbox>
  ));
}
```

### Sizes

To manage the size of the checkbox component you can provide a default or custom size through the `size` prop.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxSizesExample() {
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
  );
}
```

### Colors

The checkbox component uses the `color` prop to allow for predefined and custom colors.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxColorsExample() {
  const colors = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  return colors.map((color) => (
    <Checkbox defaultChecked key={color} variant="muted" color={color}>
      <Checkbox.Label>{color}</Checkbox.Label>
    </Checkbox>
  ));
}
```

### Alignments

To set alignment of the checkbox and its label content you can use the `align` prop.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxAlignmentsExample() {
  const alignments = ["start", "center", "end"];

  return alignments.map((alignment) => (
    <Checkbox key={alignment} align={alignment} variant="muted">
      <Checkbox.Label>
        {alignment} alignment. This alignment puts the components in the
        {alignment} position relative to each other.
      </Checkbox.Label>
    </Checkbox>
  ));
}
```

### States

Checkboxes can be given the `disabled`, `readonly`, and `defaultChecked` states.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxStatesExample() {
  return (
    <>
      <Checkbox disabled variant="muted">
        <Checkbox.Label>Disabled</Checkbox.Label>
      </Checkbox>
      <Checkbox readonly variant="muted">
        <Checkbox.Label>Readonly</Checkbox.Label>
      </Checkbox>
      <Checkbox defaultChecked variant="muted">
        <Checkbox.Label>Default Checked</Checkbox.Label>
      </Checkbox>
    </>
  );
}
```

### Indeterminate

Checkboxes support the `indeterminate` state for representing a partially selected state.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxIndeterminateExample() {
  const variants = ["outlined", "solid", "muted"];

  return variants.map((variant) => (
    <Checkbox key={variant} variant={variant} indeterminate>
      <Checkbox.Label>{variant}</Checkbox.Label>
    </Checkbox>
  ));
}
```

### High Contrast

Only available on the `"solid"` variant.

```tsx
import { Checkbox } from "@locus-ui/components";

export default function CheckboxHighContrastExample() {
  return (
    <>
      <Checkbox defaultChecked highContrast variant="solid">
        <Checkbox.Label>Solid</Checkbox.Label>
      </Checkbox>
      <Checkbox indeterminate highContrast variant="solid">
        <Checkbox.Indicator />
        <Checkbox.Label>Solid Indeterminate</Checkbox.Label>
      </Checkbox>
    </>
  );
}
```
