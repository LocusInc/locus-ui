const importSnippet = `import { Box, Portal, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Portal.Root>
  <Portal.Trigger>
    <Box className="border" px="2" py="1">
      <Text>Open Portal</Text>
    </Box>
  </Portal.Trigger>

  <Portal.Backdrop variant="shadow" />

  <Portal.Content>
    <Box p="4" m="4" className="bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))]">
      <Text>Portal Content</Text>
    </Box>
  </Portal.Content>
</Portal.Root>`;

export const styleSnippet = `.portal-backdrop[data-variant] {
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
}`;

export const anatomySnippet = `${importSnippet}

<Portal.Root>
  <Portal.Trigger />
  <Portal.Backdrop />
  <Portal.Content />
</Portal.Root>
`;

export const positionsSnippet = `${importSnippet}

const positions = ["tl", "top", "tr", "left", "center", "right", "bl", "bottom", "br"];

return positions.map((position) => (
  <Portal.Root key={position}>
    <Portal.Trigger>
      <Box className="border" px="2" py="1">
        <Text>{position.toUpperCase()}</Text>
      </Box>
    </Portal.Trigger>

    <Portal.Backdrop variant="shadow" />

    <Portal.Content position={position}>
      <Box p="4" m="4" className="bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))]">
        <Text>{position.toUpperCase()}</Text>
      </Box>
    </Portal.Content>
  </Portal.Root>
));`;

export const variantsSnippet = `${importSnippet}

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
      <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
        <Text>{variant.charAt(0).toUpperCase() + variant.slice(1)}</Text>
      </Box>
    </Portal.Content>
  </Portal.Root>
));`;

export const anchorSnippet = `${importSnippet}

<Portal.Root>
  <Portal.Trigger>
    <Box className="border" px="2" py="1">
      <Text>Anchor</Text>
    </Box>
  </Portal.Trigger>

  <Portal.Backdrop />

  <Portal.Content anchored side="bottom" align="end">
    <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
      <Text>Anchor</Text>
    </Box>
  </Portal.Content>
</Portal.Root>`;

export const anchorPositionsSnippet = `${importSnippet}

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
      <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
        <Text>{side.charAt(0).toUpperCase() + side.slice(1)}</Text>
      </Box>
    </Portal.Content>
  </Portal.Root>
));`;

export const anchorAlignsSnippet = `${importSnippet}

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
      <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
        <Text>{align.charAt(0).toUpperCase() + align.slice(1)}</Text>
      </Box>
    </Portal.Content>
  </Portal.Root>
));`;

export const offsetSnippet = `${importSnippet}

<Portal.Root>
  <Portal.Trigger>
    <Box className="border" px="2" py="1">
      <Text>Side Offset</Text>
    </Box>
  </Portal.Trigger>

  <Portal.Backdrop />

  <Portal.Content anchored side="bottom" align="start" sideOffset="32">
    <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
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
    <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
      <Text>Align Offset of 32px</Text>
    </Box>
  </Portal.Content>
</Portal.Root>`;
