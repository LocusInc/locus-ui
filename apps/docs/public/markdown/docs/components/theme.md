# Theme

The Theme component provides global and scoped theming for your application. It manages appearance (light/dark), border radius, roundness, spacing, and custom color tokens. Nest Theme components to create scoped overrides.

```tsx
import { Theme } from "@locus-ui/components";
import type { ReactNode } from "react";

export default function ThemeExample({ children }: { children: ReactNode }) {
  return (
    <Theme appearance="light" radius="md" roundness="3" spacing="md">
      {children}
    </Theme>
  );
}
```

## Anatomy

Import the component and its parts:

```typescript
import { Theme, useTheme, ThemeControl } from "@locus-ui/components";

<Theme appearance="light">
  <ThemeControl />
  {children}
</Theme>;
```

- **`Theme`** — Root provider that manages theme state and CSS variables.
- **`useTheme`** — Hook to access and modify the current theme values.
- **`ThemeControl`** — A floating panel (toggled with `Alt+T`) for adjusting theme settings at runtime.

## Examples

### Appearance

The `appearance` prop controls the color scheme. Set it to `"light"`, `"dark"`, or `"inherit"` to follow the parent theme.

```tsx
import { Theme, Text, Box } from "@locus-ui/components";

export default function ThemeAppearanceExample() {
  return (
    <Box className="flex gap-4">
      <Theme appearance="light">
        <Text>Light theme content</Text>
      </Theme>

      <Theme appearance="dark">
        <Text>Dark theme content</Text>
      </Theme>
    </Box>
  );
}
```

### Radius

The `radius` prop sets the base border radius for all child components. Options: `"none"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"full"`.

```tsx
import { Theme, Button } from "@locus-ui/components";

export default function ThemeRadiusExample() {
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

  return radii.map((radius) => (
    <Theme key={radius} radius={radius}>
      <Button variant="solid">{radius.toUpperCase()}</Button>
    </Theme>
  ));
}
```

### Spacing

The `spacing` prop controls the base spacing scale used by child components. Options: `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`.

```tsx
import { Theme, Button } from "@locus-ui/components";

export default function ThemeSpacingExample() {
  const spacings = ["xs", "sm", "md", "lg", "xl"];

  return spacings.map((spacing) => (
    <Theme key={spacing} spacing={spacing}>
      <Button variant="solid">{spacing.toUpperCase()}</Button>
    </Theme>
  ));
}
```

### Custom Colors

Use the `colors` prop to override theme color tokens. You can provide a flat object of colors, or separate `light` and `dark` overrides.

```tsx
import { Theme, Button } from "@locus-ui/components";

export default function ThemeColorsExample() {
  return (
    <Theme
      colors={{
        light: { primary: "teal", background1: "#f0fdf4" },
        dark: { primary: "cyan", background1: "#042f2e" },
      }}
    >
      <Button variant="solid">Custom Colors</Button>
    </Theme>
  );
}
```

### Nested Themes

Theme components can be nested to create scoped overrides. Child themes inherit values from their parent and only override what you specify.

```tsx
import { Theme, Button } from "@locus-ui/components";

export default function ThemeNestedExample() {
  return (
    <Theme appearance="light" radius="md">
      <Button variant="solid">Parent Theme</Button>

      <Theme appearance="dark" radius="full">
        <Button variant="solid">Sub Theme</Button>
      </Theme>
    </Theme>
  );
}
```

### useTheme Hook

The `useTheme` hook provides access to the current theme values and change handlers from within any child component.

```tsx
import { useTheme, Button, Text } from "@locus-ui/components";

export default function ThemeToggle() {
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
}
```

### ThemeControl

The `ThemeControl` component renders a floating panel with select dropdowns for all theme settings. Toggle it with `Alt+T`. Use the `position` prop to control placement.

```tsx
import { Theme, ThemeControl } from "@locus-ui/components";
import type { ReactNode } from "react";

export default function ThemeControlExample({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Theme appearance="light">
      <ThemeControl position="bottom" />
      {children}
    </Theme>
  );
}
```
