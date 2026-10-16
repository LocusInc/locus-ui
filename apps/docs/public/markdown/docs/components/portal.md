# Portal Component

A portal component for rendering content in an overlay, supporting fixed positions, anchored positioning, backdrop variants, and offset control.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalExample() {
  return (
    <Portal.Root>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>Open Portal</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop variant="shadow" />

      <Portal.Content>
        <Box
          p="4"
          m="4"
          className="bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))]"
        >
          <Text>Portal Content</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  );
}
```

```css
.portal-backdrop[data-variant] {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  &[data-variant="clear"] {
    background-color: transparent;
  }
}

.portal:not([data-anchored="true"]) {
  position: fixed;
  display: flex;
  inset: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 9999;

  &[data-position="center"] {
    justify-content: center;
    align-items: center;
  }
}
```

## Anatomy

Import the component and its parts:

```typescript
import { Box, Portal, Text } from "@locus-ui/components";

<Portal.Root>
  <Portal.Trigger />
  <Portal.Backdrop />
  <Portal.Content />
</Portal.Root>;
```

## Examples

### Positions

The `position` prop on `Portal.Content` controls where the content appears on screen. Available positions are `tl`, `top`, `tr`, `left`, `center`, `right`, `bl`, `bottom`, and `br`.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalPositionsExample() {
  const positions = [
    "tl",
    "top",
    "tr",
    "left",
    "center",
    "right",
    "bl",
    "bottom",
    "br",
  ];

  return positions.map((position) => (
    <Portal.Root key={position}>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>{position.toUpperCase()}</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop variant="shadow" />

      <Portal.Content position={position}>
        <Box
          p="4"
          m="4"
          className="bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))]"
        >
          <Text>{position.toUpperCase()}</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  ));
}
```

### Variants

The `Portal.Backdrop` component supports three variants: `clear`, `shadow`, and `blurred`.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalVariantsExample() {
  const variants = ["clear", "shadow", "blurred"];

  return variants.map((variant) => (
    <Portal.Root key={variant}>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop variant={variant} />

      <Portal.Content>
        <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
          <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  ));
}
```

### Anchor

When the `anchored` prop is set on `Portal.Content`, the content is positioned relative to the trigger element.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalAnchorExample() {
  return (
    <Portal.Root>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>Anchor</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop />

      <Portal.Content anchored side="bottom" align="end">
        <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
          <Text>Anchor</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  );
}
```

### Anchor Positions

The `side` prop controls which side of the trigger the anchored content appears on: `top`, `right`, `bottom`, or `left`.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalAnchorPositionsExample() {
  const sides = ["top", "right", "bottom", "left"];

  return sides.map((side) => (
    <Portal.Root key={side}>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>{side.charAt(0).toUpperCase() + side.slice(1)}</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop />

      <Portal.Content anchored side={side}>
        <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
          <Text>{side.charAt(0).toUpperCase() + side.slice(1)}</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  ));
}
```

### Anchor Aligns

The `align` prop controls the alignment of the anchored content relative to the trigger: `start`, `center`, or `end`.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalAnchorAlignsExample() {
  const aligns = ["start", "center", "end"];

  return aligns.map((align) => (
    <Portal.Root key={align}>
      <Portal.Trigger>
        <Box className="border" px="2" py="1">
          <Text>{align.charAt(0).toUpperCase() + align.slice(1)}</Text>
        </Box>
      </Portal.Trigger>

      <Portal.Backdrop />

      <Portal.Content anchored side="bottom" align={align}>
        <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
          <Text>{align.charAt(0).toUpperCase() + align.slice(1)}</Text>
        </Box>
      </Portal.Content>
    </Portal.Root>
  ));
}
```

### Offset

Use `sideOffset` and `alignOffset` to fine-tune the position of anchored content.

```tsx
import { Box, Portal, Text } from "@locus-ui/components";

export default function PortalOffsetExample() {
  return (
    <>
      <Portal.Root>
        <Portal.Trigger>
          <Box className="border" px="2" py="1">
            <Text>Side Offset</Text>
          </Box>
        </Portal.Trigger>

        <Portal.Backdrop />

        <Portal.Content anchored side="bottom" align="start" sideOffset="32">
          <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
            <Text>Side Offset of 32px</Text>
          </Box>
        </Portal.Content>
      </Portal.Root>

      <Portal.Root>
        <Portal.Trigger>
          <Box className="border" px="2" py="1">
            <Text>Align Offset</Text>
          </Box>
        </Portal.Trigger>

        <Portal.Backdrop />

        <Portal.Content anchored side="bottom" align="start" alignOffset="32">
          <Box className="p-4 bg-[rgb(var(--bg-2))] border border-[rgb(var(--border-1))] rounded">
            <Text>Align Offset of 32px</Text>
          </Box>
        </Portal.Content>
      </Portal.Root>
    </>
  );
}
```
