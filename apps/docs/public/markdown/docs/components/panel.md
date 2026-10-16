# Panel Component

A versatile container used to provide layout and styling capabilities.

```tsx
import { Panel } from "@locus-ui/components";
import styles from "./styles.css";

export default function PanelExample() {
  return (
    <Panel variant="outlined" p="4">
      Outlined Panel
    </Panel>
  );
}
```

```css
.panel[data-variant] {
  --panel-custom-color: var(--color, var(--panel-color));

  border-radius: min(32px, var(--lcs-radius, 0px));
  backdrop-filter: blur(var(--panel-blur, 0px));

  &[data-variant="outlined"] {
    background-color: rgba(var(--panel-custom-color), 0.8);
    border: 1px solid rgba(var(--color, var(--border-color)));
  }
}
```

## Anatomy

Import the component:

```typescript
import { Panel } from "@locus-ui/components";

<Panel />;
```

## Examples

### Variants

Panel components come with three built in variants, `solid`, `outlined`, and `muted`.

```tsx
import { Panel } from "@locus-ui/components";

export default function PanelVariantsExample() {
  const variants = ["solid", "outlined", "muted"];

  return variants.map((variant) => (
    <Panel key={variant} variant={variant} p="4">
      {variant.charAt(0).toUpperCase() + variant.slice(1)} Panel
    </Panel>
  ));
}
```

### Blurring

The `blur` prop applies a backdrop blur effect to the panel content.

```tsx
import { Box, Flex, Panel, Text } from "@locus-ui/components";

export default function PanelBlurExample() {
  const blurs = ["0px", "2px", "4px"];

  return (
    <Box className="relative">
      <Box className="absolute">
        <Text px="2" py="2">
          Test Text Test Text Test Text Test Text Test Test Text Test Text Test
          Text Test Text Test
        </Text>
      </Box>

      <Flex gap="3">
        {blurs.map((blur) => (
          <Panel key={blur} blur={blur} p="4" variant="muted">
            Blur: {blur}
          </Panel>
        ))}
      </Flex>
    </Box>
  );
}
```

### Colors

The panel component uses the `color` prop to allow for predefined and custom colors.

```tsx
import { Panel } from "@locus-ui/components";

export default function PanelColorsExample() {
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
    <Panel key={color} color={color} px="4" py="2" variant="muted">
      <Text color={color}>
        {color.charAt(0).toUpperCase() + color.slice(1)} Panel
      </Text>
    </Panel>
  ));
}
```
