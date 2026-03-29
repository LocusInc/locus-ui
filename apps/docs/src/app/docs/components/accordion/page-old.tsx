"use client";

import { Accordion, Container, Text } from "@locus-ui/components";

export default function AccordionPage() {
  const variants = ["solid", "outlined", "muted"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full">
      <Text className="text-2xl font-bold mb-4">Accordion Component</Text>

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

      <Text className="text-lg font-semibold mt-4">Multiple Open</Text>

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

      <Text className="text-lg font-semibold mt-4">Variants</Text>

      {variants.map((variant) => (
        <Container key={variant} className="flex flex-col gap-4 w-full">
          <Text className="font-semibold mt-4">{variant}</Text>

          <Accordion.Root variant={variant}>
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
        </Container>
      ))}
    </Container>
  );
}
