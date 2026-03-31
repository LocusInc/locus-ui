const importSnippet = `import { Theme, useTheme, ThemeControl } from "@locus-ui/components";`;

export const indexSnippet = `import { Theme } from "@locus-ui/components";

<Theme appearance="light" radius="md" roundness="3" spacing="md">
  {children}
</Theme>`;

export const anatomySnippet = `import { Theme, useTheme, ThemeControl } from "@locus-ui/components";

<Theme appearance="light">
  <ThemeControl />
  {children}
</Theme>`;

export const appearanceSnippet = `import { Theme, Text, Box } from "@locus-ui/components";

<Box className="flex gap-4">
  <Theme appearance="light">
    <Text>Light theme content</Text>
  </Theme>

  <Theme appearance="dark">
    <Text>Dark theme content</Text>
  </Theme>
</Box>`;

export const radiusSnippet = `import { Theme, Button } from "@locus-ui/components";

const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

return radii.map((radius) => (
  <Theme key={radius} radius={radius}>
    <Button variant="solid">{radius.toUpperCase()}</Button>
  </Theme>
));`;

export const spacingSnippet = `import { Theme, Button } from "@locus-ui/components";

const spacings = ["xs", "sm", "md", "lg", "xl"];

return spacings.map((spacing) => (
  <Theme key={spacing} spacing={spacing}>
    <Button variant="solid">{spacing.toUpperCase()}</Button>
  </Theme>
));`;

export const useThemeSnippet = `import { useTheme, Button, Text } from "@locus-ui/components";

function ThemeToggle() {
  const { appearance, onAppearanceChange } = useTheme();

  return (
    <>
      <Text>Current: {appearance}</Text>
      <Button
        variant="muted"
        onClick={() =>
          onAppearanceChange?.(appearance === "light" ? "dark" : "light")
        }
      >
        Toggle Theme
      </Button>
    </>
  );
}`;

export const themeControlSnippet = `import { Theme, ThemeControl } from "@locus-ui/components";

<Theme appearance="light">
  <ThemeControl position="bottom" />
  {children}
</Theme>`;

export const colorsSnippet = `import { Theme, Button } from "@locus-ui/components";

<Theme
  colors={{
    light: { primary: "teal", background1: "#f0fdf4" },
    dark: { primary: "cyan", background1: "#042f2e" },
  }}
>
  <Button variant="solid">Custom Colors</Button>
</Theme>`;

export const nestedSnippet = `import { Theme, Button } from "@locus-ui/components";

<Theme appearance="light" radius="md">
  <Button variant="solid">Parent Theme</Button>

  <Theme appearance="dark" radius="full">
    <Button variant="solid">Sub Theme</Button>
  </Theme>
</Theme>`;
