# Size Property

Sets the size of a component. Supports predefined scale values and custom CSS sizes.

```tsx
import { Badge } from "@locus-ui/components";

export default function SizeExample() {
  return (
    <Badge size="md" variant="solid">
      Medium
    </Badge>
  );
}
```

## Examples

### Size Scale

The `size` prop accepts values `xs`, `sm`, `md`, `lg`, and `xl`.

```tsx
import { Badge } from "@locus-ui/components";

export default function SizeSizesExample() {
  const sizes = ["xs", "sm", "md", "lg", "xl"];

  return sizes.map((size) => (
    <Badge key={size} size={size} variant="solid">
      {size.toUpperCase()}
    </Badge>
  ));
}
```

### Custom Size

The `size` prop also accepts custom CSS values.

```tsx
import { Badge } from "@locus-ui/components";

export default function SizeCustomSizeExample() {
  return (
    <Badge size="2.5rem" variant="solid">
      Custom Size
    </Badge>
  );
}
```
