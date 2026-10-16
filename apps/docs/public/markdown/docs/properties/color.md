# Color Property

Sets the color of a component. Uses predefined theme colors or accepts custom values in hex, rgb, or raw rgb formats.

```tsx
import { Badge } from "@locus-ui/components";

export default function ColorExample() {
  return (
    <Badge color="primary" variant="solid">
      Primary
    </Badge>
  );
}
```

## Examples

### Theme Colors

The `color` prop accepts semantic theme values: `primary`, `secondary`, `tertiary`, `success`, `warning`, `danger`, and `info`.

```tsx
import { Badge } from "@locus-ui/components";

export default function ColorThemeColorsExample() {
  const themeColors = [
    "primary",
    "secondary",
    "tertiary",
    "success",
    "warning",
    "danger",
    "info",
  ];

  return themeColors.map((color) => (
    <Badge key={color} color={color} variant="solid">
      {color}
    </Badge>
  ));
}
```

### Palette Colors

Additional named palette colors are available: `red`, `orange`, `yellow`, `green`, `blue`, `purple`, `gray`, `maroon`, `cyan`, `navy`, `teal`, `lime`, `magenta`, and `white`.

```tsx
import { Badge } from "@locus-ui/components";

export default function ColorPaletteColorsExample() {
  const paletteColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "gray",
    "maroon",
    "cyan",
    "navy",
    "teal",
    "lime",
    "magenta",
    "white",
  ];

  return paletteColors.map((color) => (
    <Badge key={color} color={color} variant="solid">
      {color}
    </Badge>
  ));
}
```

### Custom Colors

The `color` prop also accepts custom values in hex, `rgb()`, or raw RGB formats.

```tsx
import { Badge } from "@locus-ui/components";

export default function ColorCustomColorsExample() {
  return (
    <>
      <Badge color="#7BEB34" variant="solid">
        Hex
      </Badge>
      <Badge color="rgb(125, 235, 52)" variant="solid">
        RGB
      </Badge>
      <Badge color="125, 235, 52" variant="solid">
        Raw RGB
      </Badge>
    </>
  );
}
```
