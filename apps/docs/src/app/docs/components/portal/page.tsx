"use client";

import { Box, Container, Portal, Text } from "@locus-ui/components";

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
] as const;

export default function SelectPage() {
  const variants = ["clear", "shadow", "blurred"] as const;

  const sides = ["top", "right", "bottom", "left"] as const;
  const aligns = ["start", "center", "end"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Portal Component</Text>

      <Text>Positions</Text>

      <Box className="flex gap-4 flex-wrap">
        {positions.map((position) => (
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
                className="bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))]"
              >
                <Text>{position.toUpperCase()}</Text>
              </Box>
            </Portal.Content>
          </Portal.Root>
        ))}
      </Box>

      <Text>Variants</Text>

      <Box className="flex gap-4">
        {variants.map((variant) => (
          <Portal.Root key={variant}>
            <Portal.Trigger>
              <Box className="border" px="2" py="1">
                <Text>{variant}</Text>
              </Box>
            </Portal.Trigger>

            <Portal.Backdrop variant={variant} />

            <Portal.Content>
              <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
                <Text>{variant}</Text>
              </Box>
            </Portal.Content>
          </Portal.Root>
        ))}
      </Box>

      <Text>Anchor</Text>

      <Box className="flex gap-4">
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
        </Portal.Root>
      </Box>

      <Text>Anchor Positions</Text>

      <Box className="flex gap-4">
        {sides.map((side) => (
          <Portal.Root key={side}>
            <Portal.Trigger>
              <Box className="border" px="2" py="1">
                <Text>{side}</Text>
              </Box>
            </Portal.Trigger>

            <Portal.Backdrop />

            <Portal.Content anchored side={side}>
              <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
                <Text>{side}</Text>
              </Box>
            </Portal.Content>
          </Portal.Root>
        ))}
      </Box>

      <Text>Anchor Aligns</Text>

      <Box className="flex gap-4">
        {aligns.map((align) => (
          <Portal.Root key={align}>
            <Portal.Trigger>
              <Box className="border" px="2" py="1">
                <Text>{align}</Text>
              </Box>
            </Portal.Trigger>

            <Portal.Backdrop />

            <Portal.Content anchored side="bottom" align={align}>
              <Box className="p-4 bg-[rgb(var(--background-color-2))] border border-[rgb(var(--border-color-1))] rounded">
                <Text>{align}</Text>
              </Box>
            </Portal.Content>
          </Portal.Root>
        ))}
      </Box>

      <Text>Offset</Text>

      <Box className="flex gap-4">
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
        </Portal.Root>
      </Box>
    </Container>
  );
}
