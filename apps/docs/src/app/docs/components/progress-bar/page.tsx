"use client";

import { Box, Container, ProgressBar, Text } from "@locus-ui/components";

export default function ProgressBarPage() {
  const variants = ["solid", "outlined", "muted"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const colors = [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "success",
    "danger",
    "warning",
    "info",
  ] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Progress Bar Component</Text>

      <Text className="font-bold">Variants</Text>

      <Box className="flex gap-4 flex-wrap">
        {variants.map((variant) => (
          <Box key={variant} className="flex flex-col gap-2">
            <Text>{variant}</Text>

            <ProgressBar
              key={variant}
              variant={variant}
              value={0.5}
              className="w-48"
            />
          </Box>
        ))}
      </Box>

      <Text className="font-bold">Sizes</Text>

      <Box className="flex gap-4 flex-wrap">
        {sizes.map((size) => (
          <Box key={size} className="flex flex-col gap-2">
            <Text>{size}</Text>

            <ProgressBar
              key={size}
              size={size}
              value={0.5}
              variant="muted"
              className="w-48"
            />
          </Box>
        ))}
      </Box>

      <Text className="font-bold">Colors</Text>

      <Box className="flex gap-4 flex-wrap">
        {colors.map((color) => (
          <Box key={color} className="flex flex-col gap-2">
            <Text>{color}</Text>

            <ProgressBar
              value={0.5}
              color={color}
              variant="muted"
              className="w-48"
            />
          </Box>
        ))}
      </Box>

      <Text className="font-bold">Stacking</Text>

      <Box className="flex flex-col gap-2">
        <ProgressBar className="w-48" variant="solid" size="xl">
          <ProgressBar.Fill value={0.3} color="primary" />
          <ProgressBar.Fill value={0.2} color="secondary" />
          <ProgressBar.Fill value={0.1} color="accent" />
        </ProgressBar>
      </Box>

      <Text className="font-bold">Over Stacking</Text>

      <Box className="flex flex-col gap-2">
        <ProgressBar className="w-48" variant="solid" size="xl">
          <ProgressBar.Fill value={0.5} color="primary" />
          <ProgressBar.Fill value={0.4} color="secondary" />
          <ProgressBar.Fill value={0.3} color="accent" />
        </ProgressBar>
      </Box>
    </Container>
  );
}
