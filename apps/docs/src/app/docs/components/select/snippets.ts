const importSnippet = `import { Select } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

<Select.Root variant="outlined">
  <Select.Label position="top">Fruit</Select.Label>
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
    <Select.Item value="mango">Mango</Select.Item>
  </Select.Content>
</Select.Root>`;

export const styleSnippet = `.select-root[data-variant] {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: calc(8px * var(--lcs-spacing, 1));
  width: 100%;
  outline: none;

  &[data-variant="outlined"] {
    &:not(:has(.select-label[data-position="inside"])) {
      .select-trigger {
        border: 1px solid rgb(var(--border-color));
      }
    }
  }

  &[data-variant="solid"] {
    .select-trigger {
      background-color: rgba(var(--background-color-2), 0.95);
    }
  }
}

.select-trigger[data-variant] {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--lcs-radius);
  background: transparent;
  border: none;
  cursor: pointer;
  min-height: 32px;
  padding: calc(4px * var(--lcs-spacing)) calc(8px * var(--lcs-spacing));
  outline: none;
}

.select-content {
  background-color: rgba(var(--background-color-1), 0.9);
  border-radius: min(var(--lcs-radius), 24px);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(var(--lcs-backdrop-blur, 2px));
  overflow: hidden;
}`;

export const anatomySnippet = `${importSnippet}

<Select.Root>
  <Select.Label />
  <Select.Trigger />
  <Select.Content>
    <Select.Group>
      <Select.Item />
    </Select.Group>
    <Select.Separator />
  </Select.Content>
</Select.Root>
`;

export const labelPositionsSnippet = `${importSnippet}

const labelPositions = ["top", "left", "inside"];

return labelPositions.map((position) => (
  <Select.Root key={position} variant="outlined">
    <Select.Label position={position}>
      {position.charAt(0).toUpperCase() + position.slice(1)}
    </Select.Label>
    <Select.Trigger />
    <Select.Content>
      <Select.Item value="option1">Option 1</Select.Item>
      <Select.Item value="option2">Option 2</Select.Item>
      <Select.Item value="option3">Option 3</Select.Item>
    </Select.Content>
  </Select.Root>
));`;

export const variantsSnippet = `${importSnippet}

const variants = ["outlined", "solid", "clear"];

return variants.map((variant) => (
  <Select.Root key={variant} variant={variant}>
    <Select.Label position="left">
      {variant.charAt(0).toUpperCase() + variant.slice(1)}
    </Select.Label>
    <Select.Trigger />
    <Select.Content>
      <Select.Item value="option1">Option 1</Select.Item>
      <Select.Item value="option2">Option 2</Select.Item>
      <Select.Item value="option3">Option 3</Select.Item>
    </Select.Content>
  </Select.Root>
));`;

export const groupsSnippet = `${importSnippet}

<Select.Root variant="solid">
  <Select.Trigger />
  <Select.Content>
    <Select.Group title="Group 1">
      <Select.Item value="option1">Option 1</Select.Item>
      <Select.Item value="option2">Option 2</Select.Item>
    </Select.Group>

    <Select.Separator />

    <Select.Group title="Group 2">
      <Select.Item value="option3" disabled>Option 3</Select.Item>
      <Select.Item value="option4">Option 4</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>`;
