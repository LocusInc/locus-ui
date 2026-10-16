# Skeleton Component

A placeholder component used to indicate loading state before content is available.

```tsx
import { Skeleton } from "@locus-ui/components";

export default function SkeletonExample() {
  return <Skeleton variant="solid" style={{ width: 200, height: 24 }} />;
}
```

```css
.skeleton[data-variant] {
  min-width: fit-content;
  min-height: fit-content;
  border-radius: min(32px, var(--lcs-radius, 0px));

  &[data-variant="solid"] {
    background-color: rgb(var(--border-1));
  }

  &[data-variant="pulse"] {
    /* add pulse animation */
  }

  &[data-variant="shimmer"] {
    /* add shimmer animation */
  }
}
```

## Anatomy

Import the component and its parts:

```typescript
import { Skeleton } from "@locus-ui/components";

<Skeleton />;
```

## Examples

### Variants

Skeleton components come with three built-in variants: `solid`, `pulse`, and `shimmer`.

```tsx
import { Skeleton } from "@locus-ui/components";

export default function SkeletonVariantsExample() {
  const variants = ["solid", "pulse", "shimmer"];

  return variants.map((variant) => (
    <Skeleton
      key={variant}
      variant={variant}
      style={{ width: 200, height: 24 }}
    />
  ));
}
```

### Loading State

Use the `loading` prop to toggle between the skeleton and its children. When `loading` is `false`, the children are rendered instead of the skeleton placeholder.

```tsx
import { Skeleton } from "@locus-ui/components";
import { Grid, Text } from "@locus-ui/components";

export default function SkeletonLoadingExample() {
  return (
    <Grid columns="2" gap="2">
      <Text>Loading</Text>
      <Skeleton loading={true} variant="pulse">
        <Text>This is the content</Text>
      </Skeleton>

      <Text>Loaded</Text>
      <Skeleton loading={false} variant="pulse">
        <Text>This is the content</Text>
      </Skeleton>
    </Grid>
  );
}
```

### Composition

Skeletons can be composed to represent more complex loading layouts.

```tsx
import { Skeleton } from "@locus-ui/components";
import { Flex } from "@locus-ui/components";

export default function SkeletonCompositionExample() {
  return (
    <Flex direction="column" gap="2">
      <Skeleton variant="pulse" style={{ width: 120, height: 12 }} />
      <Skeleton variant="pulse" style={{ width: 200, height: 12 }} />
      <Skeleton variant="pulse" style={{ width: 160, height: 12 }} />
    </Flex>
  );
}
```
