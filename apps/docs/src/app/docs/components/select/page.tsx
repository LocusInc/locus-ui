"use client";

import { Box, Container, Select, Text } from "@locus-ui/components";

export default function SelectPage() {
  const labelPositions = ["top", "left", "inside"] as const;
  const variants = ["outlined", "solid", "clear"] as const;

  return (
    <Container className="p-4 bg-[rgb(var(--background-color-1))]">
      <h1 className="text-2xl font-bold mb-4">Select Component</h1>

      <div className="flex flex-col gap-2">
        <Text>Label Positions</Text>

        <Box className="flex gap-4 items-end">
          {labelPositions.map((position) => (
            <Select.Root key={position} variant="outlined">
              <Select.Label position={position}>{position}</Select.Label>
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="option1">Option 1</Select.Item>
                <Select.Item value="option2">Option 2</Select.Item>
                <Select.Item value="option3">Option 3</Select.Item>
              </Select.Content>
            </Select.Root>
          ))}
        </Box>

        <Text mt="4">Variants</Text>

        <Box className="flex gap-4">
          {variants.map((variant) => (
            <Box className="flex-1 flex flex-col gap-4" key={variant}>
              {labelPositions.map((position) => (
                <Select.Root key={position} variant={variant}>
                  <Select.Label position={position}>
                    {`${variant} ${position}`}
                  </Select.Label>
                  <Select.Trigger />
                  <Select.Content>
                    <Select.Item value="option1">Option 1</Select.Item>
                    <Select.Item value="option2">Option 2</Select.Item>
                    <Select.Item value="option3">Option 3</Select.Item>
                  </Select.Content>
                </Select.Root>
              ))}
            </Box>
          ))}
        </Box>

        <Text mt="4">Groups</Text>

        <Select.Root variant="solid">
          {/* <Select.Label position="left">Groups</Select.Label> */}
          <Select.Trigger />

          <Select.Content>
            <Select.Group title="Group 1">
              <Select.Item value="option1">Option 1</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group title="Group 2">
              <Select.Item value="option3" disabled>
                Option 3
              </Select.Item>
              <Select.Item value="option4">Option 4</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </div>
    </Container>
  );
}
