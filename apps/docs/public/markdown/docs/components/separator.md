# Separator Component

A component for visually separating content with a line.

```tsx
import { Flex, Panel, Separator, Text } from "@locus-ui/components";
import styles from "./styles.css";

export default function SeparatorExample() {
  return (
    <Panel px="4" py="2" variant="outlined">
      <Flex gap="2" direction="column">
        <Text>My Movie</Text>
        <Separator />
        <Text>A movie made by me</Text>
      </Flex>
    </Panel>
  );
}
```

```css
.separator[data-direction] {
  &[data-direction="horizontal"] {
    width: 100%;
    height: 1px;
  }

  &[data-direction="vertical"] {
    height: 100%;
    width: 1px;
  }

  &[data-variant="solid"]:not([data-direction="vertical"]) {
    border-top: 1px solid rgb(var(--border-color));
  }
}
```

## Anatomy

Import the component:

```typescript
import { Separator } from "@locus-ui/components";

<Separator />;
```

## Examples

### Variants

The `variant` prop controls the line style: `solid` (default), `dashed`, or `dotted`.

```tsx
import { Separator } from "@locus-ui/components";

export default function SeparatorVariantsExample() {
  const variants = ["solid", "dashed", "dotted"];

  return variants.map((variant) => (
    <Flex key={variant} gap="4" align="center" className="flex-1">
      <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
      <Separator variant={variant} />
    </Flex>
  ));
}
```

### Directions

The `direction` prop controls the orientation: `horizontal` (default) or `vertical`.

```tsx
import { Flex, Separator, Text } from "@locus-ui/components";

export default function SeparatorDirectionsExample() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Top Text</Text>
        <Separator direction="horizontal" />
        <Text>Bottom Text</Text>
      </Flex>

      <Flex gap="2">
        <Text>Left Text</Text>
        <Separator direction="vertical" />
        <Text>Right Text</Text>
      </Flex>
    </>
  );
}
```
