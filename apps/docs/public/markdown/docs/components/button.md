# Button Component

A versatile Button component for triggering actions and events.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonExample() {
  return <Button variant="solid">Solid Button</Button>;
}
```

```css
.button[data-variant] {
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
```

## Anatomy

Import the component and its parts:

```typescript
import { Button } from "@locus-ui/components";

<Button />;
```

## Examples

### Variants

Button components come with four built in variants, `solid`, `outlined`, `muted`, and `clear`.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonVariantsExample() {
  const variants = ["solid", "outlined", "muted", "clear"];

  return variants.map((variant) => (
    <Button key={variant} variant={variant}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
    </Button>
  ));
}
```

### Colors

The button component uses the `color` prop to allow for predefined and custom colors.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonColorsExample() {
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
    <Button key={color} color={color} variant="muted">
      {color.charAt(0).toUpperCase() + color.slice(1)} Button
    </Button>
  ));
}
```

### Sizes

To manage the size of the button component you can provide a default or custom size through the `size` prop.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonSizesExample() {
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  return sizes.map((size) => (
    <Button key={size} size={size} variant="muted">
      {size.toUpperCase()} Button
    </Button>
  ));
}
```

### States

Buttons can be given the `disabled` and `readonly` states.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonStatesExample() {
  return (
    <>
      <Button variant="solid">Default</Button>
      <Button variant="solid" disabled>
        Disabled
      </Button>
      <Button variant="solid" readonly>
        Readonly
      </Button>
    </>
  );
}
```

Each variant has its own disabled styling.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonDisabledVariantsExample() {
  const variants = ["solid", "outlined", "muted", "clear"];

  return variants.map((variant) => (
    <Button disabled key={variant} variant={variant}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Disabled
    </Button>
  ));
}
```

### High Contrast

The `highContrast` prop enables high contrast mode for better visibility. High contrast button styles are only available with the `solid` variant.

```tsx
import { Button } from "@locus-ui/components";

export default function ButtonHighContrastExample() {
  return (
    <Button highContrast variant="solid">
      High Contrast
    </Button>
  );
}
```
