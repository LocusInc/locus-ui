"use client";

import { Box, Button, Container, Text, useTheme } from "@locus-ui/components";

export default function BoxPage() {
  const { appearance, onAppearanceChange } = useTheme();

  return (
    <Container className="p-4 w-full min-h-full bg-[rgb(var(--background-color-1))]">
      <Text>Theme</Text>

      <Text>Appearance - {appearance}</Text>

      <Box className="flex gap-2 flex-wrap mt-2">
        <Button variant="muted" onClick={() => onAppearanceChange?.("light")}>
          <Text>Light</Text>
        </Button>

        <Button variant="muted" onClick={() => onAppearanceChange?.("dark")}>
          <Text>Dark</Text>
        </Button>
      </Box>
    </Container>
  );
}
