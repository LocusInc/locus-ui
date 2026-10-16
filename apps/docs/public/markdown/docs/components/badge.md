# Badge Component

A versatile Badge component for labeling and categorizing content.

```tsx
import { Badge } from "@locus-ui/components";

export default function BadgeExample() {
  return <Badge variant="solid">Top Subscriber</Badge>;
}
```

```css
.badge[data-variant] {
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
```

## Anatomy

Import the component and its parts:

```typescript
import { Badge } from "@locus-ui/components";

<Badge />;
```

## Examples

### Variants

Badge components come with four built in variants, `solid`, `outlined`, `muted`, and `clear`.

```tsx
import { Badge } from "@locus-ui/components";

export default function BadgeVariantsExample() {
  const variants = ["solid", "outlined", "muted", "clear"];

  return variants.map((variant) => (
    <Badge key={variant} variant={variant}>
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
    </Badge>
  ));
}
```

### Colors

The badge component uses the `color` prop to allow for predefined and custom colors.

```tsx
import { Badge } from "@locus-ui/components";

export default function BadgeColorsExample() {
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
    <Badge key={color} color={color} variant="muted">
      {color.charAt(0).toUpperCase() + color.slice(1)} Badge
    </Badge>
  ));
}
```

### Sizes

To manage the size of the badge component you can provide a default or custom size through the `size` prop.

```tsx
import { Badge } from "@locus-ui/components";

export default function BadgeSizesExample() {
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  return sizes.map((size) => (
    <Badge key={size} size={size} variant="muted">
      {size.toUpperCase()} Badge
    </Badge>
  ));
}
```

### Color Inheritance

Works with any svg with `fill="currentColor"`.

```tsx
import { Badge } from "@locus-ui/components";

export default function BadgeColorInheritanceExample() {
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
  ));
}
```
