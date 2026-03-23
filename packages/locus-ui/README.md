# @locus-ui/components

**GitHub:** [https://github.com/LocusInc/locus-ui](https://github.com/LocusInc/locus-ui)

An (optionally) unstyled modern React UI component library built with Tailwind CSS v4, featuring compound components, responsive props, and a powerful theming system.

## Features

- **Theming** — Light/dark mode, configurable radius, roundness, and spacing with nestable sub-themes
- **Compound Components** — Select, Accordion, Checkbox, and Portal use intuitive dot-notation APIs
- **Responsive Props** — Margin, padding, radius, and spacing support breakpoint objects (`{ initial: "sm", lg: "xl" }`)
- **Data-Attribute Styling** — Styling driven by `data-*` attributes for clean separation of logic and CSS
- **Tree-Shakeable** — ESM + CJS dual output with code splitting
- **Next.js Ready** — All components are `"use client"` compatible

## Installation

```bash
npm install @locus-ui/components
```

### Peer Dependencies

- `react` ^18.0.0 || ^19.0.0
- `react-dom` ^18.0.0 || ^19.0.0

## Quick Start

Import the stylesheet and wrap your app with the `Theme` provider:

```tsx
import { Theme } from "@locus-ui/components";
import "@locus-ui/components/styles";

export default function App({ children }) {
  return (
    <Theme appearance="light" radius="md" spacing="md">
      {children}
    </Theme>
  );
}
```

## Usage Examples

### Button

```tsx
import { Button } from "@locus-ui/components";

<Button variant="solid" color="primary" size="md">
  Click me
</Button>;
```

### Select

```tsx
import { Select } from "@locus-ui/components";

<Select.Root variant="outlined" placeholder="Choose a fruit">
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
    <Select.Item value="cherry">Cherry</Select.Item>
  </Select.Content>
</Select.Root>;
```

### Accordion

```tsx
import { Accordion } from "@locus-ui/components";

<Accordion.Root variant="outlined" multiple>
  <Accordion.Item value="item-1">
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>Section 2</Accordion.Header>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>;
```

### Checkbox

```tsx
import { Checkbox } from "@locus-ui/components";

<Checkbox.Root
  color="primary"
  onCheckedChange={(checked) => console.log(checked)}
>
  <Checkbox.Indicator />
  <Checkbox.Label>Accept terms</Checkbox.Label>
</Checkbox.Root>;
```

## Theming

By default, locus-ui components are unstyled so that you have complete control over the look and feel of your project.

However we do provide styles for each component as long as a variant is given to the component.

To use our provided styles, wrap your app in `<Theme>` to configure design tokens. Themes can be nested to create sub-themes that inherit and override parent values.

```tsx
<Theme appearance="dark" radius="lg" roundness="4" spacing="md">
  {/* Dark themed content */}
  <Theme appearance="light" radius="sm">
    {/* Light sub-theme inheriting roundness and spacing */}
  </Theme>
</Theme>
```

Access theme values programmatically with the `useTheme` hook:

```tsx
import { useTheme } from "@locus-ui/components";

const { appearance, setAppearance, radius, spacing } = useTheme();
```

| Token        | Values                                                                  | Default   |
| ------------ | ----------------------------------------------------------------------- | --------- |
| `appearance` | `"light"`, `"dark"`, `"inherit"`                                        | `"light"` |
| `radius`     | `"none"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"full"`, `"inherit"` | `"md"`    |
| `roundness`  | `"1"` – `"6"`, `"inherit"`                                              | `"3"`     |
| `spacing`    | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"inherit"`                     | `"md"`    |

## Shared Props

Most components accept these common props:

| Prop      | Values                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `color`   | `"primary"`, `"secondary"`, `"tertiary"`, `"accent"`, `"success"`, `"warning"`, `"danger"`, `"info"` |
| `size`    | `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`                                                               |
| `variant` | `"solid"`, `"outlined"`, `"muted"`, `"clear"`                                                        |
| `radius`  | `"none"`, `"xs"`, `"sm"`, `"md"`, `"lg"`, `"xl"`, `"full"`, `"inherit"`                              |
| `margin`  | `-8` to `8`, `"auto"` (directional: `mt`, `mb`, `ml`, `mr`, `mx`, `my`)                              |
| `padding` | `0` to `8` (directional: `pt`, `pb`, `pl`, `pr`, `px`, `py`)                                         |

All layout props support responsive breakpoint objects:

```tsx
<Box p={{ initial: "2", md: "4", lg: "8" }} />
```

## License

ISC
