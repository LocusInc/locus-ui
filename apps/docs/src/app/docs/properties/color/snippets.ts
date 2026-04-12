const importSnippet = `import { Badge } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Badge color="primary" variant="solid">
  Primary
</Badge>`;

export const themeColorsSnippet = `${importSnippet}

const themeColors = [
  "primary", "secondary", "tertiary",
  "success", "warning", "danger", "info",
];

return themeColors.map((color) => (
  <Badge key={color} color={color} variant="solid">
    {color}
  </Badge>
));`;

export const paletteColorsSnippet = `${importSnippet}

const paletteColors = [
  "red", "orange", "yellow", "green", "blue",
  "purple", "gray", "maroon", "cyan", "navy",
  "teal", "lime", "magenta", "white",
];

return paletteColors.map((color) => (
  <Badge key={color} color={color} variant="solid">
    {color}
  </Badge>
));`;

export const customColorsSnippet = `${importSnippet}

<Badge color="#7BEB34" variant="solid">Hex</Badge>
<Badge color="rgb(125, 235, 52)" variant="solid">RGB</Badge>
<Badge color="125, 235, 52" variant="solid">Raw RGB</Badge>`;
