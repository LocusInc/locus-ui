# Progress Bar Component

A progress bar component to display single or stacked progress indicators.

```tsx
import { ProgressBar } from "@locus-ui/components";
import styles from "./styles.css";

export default function ProgressBarExample() {
  return <ProgressBar.Root variant="muted" value={0.5} className="w-48" />;
}
```

```css
.progress-bar-root[data-variant] {
  --progress-bar-base: var(--lcs-color, var(--panel-color));
  --progress-bar-color: var(--color, var(--primary));

  display: flex;
  overflow: hidden;
  min-height: 1px;
  border-radius: var(--lcs-radius, 1);
  height: calc(4px * var(--lcs-spacing, 1));

  &[data-variant="solid"] {
    background-color: rgba(var(--progress-bar-base), 0.8);
  }

  &[data-variant="outlined"] {
    background-color: transparent;
    border: 1px solid rgba(var(--progress-bar-color), 0.8);
  }

  &[data-variant="muted"] {
    background-color: rgba(var(--progress-bar-color), 0.2);
  }
}

.progress-bar-fill[data-variant] {
  --progress-bar-fill-color: var(--color, var(--primary));

  height: 100%;

  &[data-variant="solid"] {
    background-color: rgba(var(--progress-bar-fill-color), 1);
  }

  &[data-variant="outlined"] {
    background-color: rgba(var(--progress-bar-fill-color), 0.8);
  }

  &[data-variant="muted"] {
    background-color: rgba(var(--progress-bar-fill-color), 0.6);
  }
}
```

## Anatomy

Import the component and its parts:

```typescript
import { ProgressBar } from "@locus-ui/components";

<ProgressBar.Root>
  <ProgressBar.Fill />
</ProgressBar.Root>;
```

## Examples

### Variants

Progress bar components come with three built in variants, `solid`, `outlined`, and `muted`.

```tsx
import { ProgressBar } from "@locus-ui/components";

export default function ProgressBarVariantsExample() {
  const variants = ["solid", "outlined", "muted"];

  return variants.map((variant) => (
    <ProgressBar.Root
      key={variant}
      variant={variant}
      value={0.5}
      className="w-48"
    />
  ));
}
```

### Sizes

To manage the size of the progress bar you can provide a size through the `size` prop.

```tsx
import { ProgressBar } from "@locus-ui/components";

export default function ProgressBarSizesExample() {
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  return sizes.map((size) => (
    <ProgressBar.Root
      key={size}
      size={size}
      value={0.5}
      variant="muted"
      className="w-48"
    />
  ));
}
```

### Colors

The progress bar component uses the `color` prop to allow for predefined and custom colors.

```tsx
import { ProgressBar } from "@locus-ui/components";

export default function ProgressBarColorsExample() {
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
    <ProgressBar.Root
      value={0.5}
      color={color}
      variant="muted"
      className="w-48"
    />
  ));
}
```

### Stacking

Use `ProgressBar.Fill` children to create stacked progress bars with multiple segments.

```tsx
import { ProgressBar } from "@locus-ui/components";

export default function ProgressBarStackingExample() {
  return (
    <ProgressBar.Root className="w-48" variant="solid" size="xl">
      <ProgressBar.Fill value={0.3} color="primary" />
      <ProgressBar.Fill value={0.2} color="secondary" />
      <ProgressBar.Fill value={0.1} color="tertiary" />
    </ProgressBar.Root>
  );
}
```

### Over Stacking

When stacked fill values exceed 1, the progress bar gracefully handles overflow.

```tsx
import { ProgressBar } from "@locus-ui/components";

export default function ProgressBarOverStackingExample() {
  return (
    <ProgressBar.Root className="w-48" variant="solid" size="xl">
      <ProgressBar.Fill value={0.5} color="primary" />
      <ProgressBar.Fill value={0.4} color="secondary" />
      <ProgressBar.Fill value={0.3} color="tertiary" />
    </ProgressBar.Root>
  );
}
```
