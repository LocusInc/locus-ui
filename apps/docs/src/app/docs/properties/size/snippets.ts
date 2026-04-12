const importSnippet = `import { Badge } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Badge size="md" variant="solid">
  Medium
</Badge>`;

export const sizesSnippet = `${importSnippet}

const sizes = ["xs", "sm", "md", "lg", "xl"];

return sizes.map((size) => (
  <Badge key={size} size={size} variant="solid">
    {size.toUpperCase()}
  </Badge>
));`;

export const customSizeSnippet = `${importSnippet}

<Badge size="2.5rem" variant="solid">
  Custom Size
</Badge>`;
