const importSnippet = `import { Accordion, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}
import styles from "./styles.css";

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
</Accordion.Root>`;

export const styleSnippet = `.accordion-root[data-variant] {
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
`;

export const anatomySnippet = `${importSnippet}

<Accordion.Root>
  <Accordion.Item>
    <Accordion.Header />
    <Accordion.Content />
  </Accordion.Item>
</Accordion.Root>
`;

export const variantsSnippet = `${importSnippet}

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
));`;

export const multipleSnippet = `${importSnippet}

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
</Accordion.Root>`;
