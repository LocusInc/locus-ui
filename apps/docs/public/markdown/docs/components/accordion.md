# Accordion Component

A versatile Accordion component, managing state, context, and styling.

```tsx
import { Accordion, Text } from "@locus-ui/components";
import styles from "./styles.css";

export default function AccordionExample() {
  return (
    <Accordion.Root variant="muted">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Text>Item 1</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 1.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Text>Item 2</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 2.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Header>
          <Text>Item 3</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 3.</Text>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```

```css
.accordion-root[data-variant] {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: min(var(--lcs-radius, 0), 24px);
  overflow: hidden;

  &[data-variant="solid"] {
    border: 1px solid rgba(var(--border-color), 0.2);
  }

  &[data-variant="outlined"] {
    border: 1px solid rgb(var(--border-color));
  }
}

.accordion-header[data-variant] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(8px * var(--lcs-spacing, 1)) calc(12px * var(--lcs-spacing, 1));
  cursor: pointer;
  user-select: none;
  transition: background-color 150ms ease;

  &[data-variant="solid"]:hover,
  &[data-variant="outlined"]:hover,
  &[data-variant="muted"]:hover {
    background-color: rgba(var(--primary), 0.2);
  }
}
```

## Anatomy

Import the component and its parts:

```typescript
import { Accordion, Text } from "@locus-ui/components";

<Accordion.Root>
  <Accordion.Item>
    <Accordion.Header />
    <Accordion.Content />
  </Accordion.Item>
</Accordion.Root>;
```

## Examples

### Variants

Accordion components come with three built in variants, `solid`, `outlined`, and `muted`.

```tsx
import { Accordion, Text } from "@locus-ui/components";

export default function AccordionVariantsExample() {
  const variants = ["solid", "outlined", "muted"];

  return variants.map((variant) => (
    <Accordion.Root key={variant} variant={variant}>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Text>Item 1</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 1.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Text>Item 2</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 2.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Header>
          <Text>Item 3</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 3.</Text>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ));
}
```

### Multiple Open

The `multiple` prop allows multiple accordion items to be expanded simultaneously.

```tsx
import { Accordion, Text } from "@locus-ui/components";

export default function AccordionMultipleExample() {
  return (
    <Accordion.Root multiple variant="muted">
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Text>Item 1</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 1.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Text>Item 2</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 2.</Text>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Header>
          <Text>Item 3</Text>
        </Accordion.Header>
        <Accordion.Content>
          <Text>This is the content of Item 3.</Text>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
```
