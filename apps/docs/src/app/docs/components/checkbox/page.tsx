"use client";

import { Box, Checkbox, Container, Text } from "locus-ui";
import { PropertyTable } from "../../../../components/property-table";

const CheckboxPage = () => {
  const labelPositions = ["top", "bottom", "left", "right"] as const;
  const variants = ["outlined", "solid", "muted"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const alignments = ["start", "center", "end"] as const;

  return (
    <Container className="p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Checkbox Component</Text>

      <div className="flex flex-col gap-2">
        <Text mt="4" className="font-bold">
          Label Positions
        </Text>

        <div className="flex gap-8">
          {labelPositions.map((position) => (
            <Checkbox key={position} variant="muted">
              <Checkbox.Label position={position}>{position}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          Variants
        </Text>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Checkbox key={variant} variant={variant}>
              <Checkbox.Label>{variant}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          Sizes
        </Text>

        <div className="flex gap-4">
          {sizes.map((size) => (
            <Checkbox key={size} size={size} variant="muted">
              <Checkbox.Label>{size}</Checkbox.Label>
            </Checkbox>
          ))}

          <Checkbox size="40px" variant="muted">
            <Checkbox.Label>Custom Size</Checkbox.Label>
          </Checkbox>
        </div>

        <Text mt="4" className="font-bold">
          Alignments
        </Text>

        <div className="flex gap-4">
          {alignments.map((alignment) => (
            <Checkbox key={alignment} align={alignment} variant="muted">
              <Checkbox.Label>
                {alignment} alignment. This alignment puts the components in the{" "}
                {alignment} position relative to each other.
              </Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          States
        </Text>

        <div className="flex gap-4">
          <Checkbox disabled variant="muted">
            <Checkbox.Label>Disabled</Checkbox.Label>
          </Checkbox>

          <Checkbox readonly variant="muted">
            <Checkbox.Label>Readonly</Checkbox.Label>
          </Checkbox>

          <Checkbox defaultChecked variant="muted">
            <Checkbox.Label>Default Checked</Checkbox.Label>
          </Checkbox>
        </div>

        <Text mt="4" className="font-bold">
          Indeterminate
        </Text>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Checkbox key={variant} variant={variant} indeterminate>
              <Checkbox.Label>{variant}</Checkbox.Label>
            </Checkbox>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          High Contrast
        </Text>

        <Text>Only available on {`"solid"`} variant</Text>

        <div className="flex gap-4">
          <Checkbox defaultChecked highContrast variant="solid">
            <Checkbox.Label>Solid</Checkbox.Label>
          </Checkbox>

          <Checkbox indeterminate highContrast variant="solid">
            <Checkbox.Indicator />
            <Checkbox.Label>Solid Indeterminate</Checkbox.Label>
          </Checkbox>
        </div>

        <Text mt="8" className="font-bold">
          Styling Attributes
        </Text>

        <div className="flex flex-col gap-2">
          <Box mt="2" className="flex gap-2 items-center">
            <Text px="4" className="font-bold">
              Root
            </Text>

            <Text
              px="2"
              className="text-sm bg-[rgb(var(--background-color-2))] rounded-md w-fit h-fit font-mono"
            >
              .checkbox-root
            </Text>
          </Box>

          <PropertyTable
            properties={[
              {
                name: "data-variant",
                type: "enum",
                values: '"solid" | "outlined" | "muted"',
              },
              {
                name: "data-checked",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
              {
                name: "data-indeterminate",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
              {
                name: "data-high-contrast",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
              {
                name: "data-disabled",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
              {
                name: "data-readonly",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
              {
                name: "data-required",
                type: "boolean",
                values: '"true" | "false"',
                defaultValue: "undefined",
              },
            ]}
          />

          <Box mt="2" className="flex gap-2 items-center">
            <Text px="4" className="font-bold">
              Indicator
            </Text>

            <Text
              px="2"
              className="text-sm bg-[rgb(var(--background-color-2))] rounded-md w-fit h-fit font-mono"
            >
              .checkbox-indicator
            </Text>
          </Box>

          <PropertyTable
            properties={[
              {
                name: "data-variant",
                type: "enum",
                values: '"solid" | "outlined" | "muted"',
              },
            ]}
          />

          <Box mt="2" className="flex gap-2 items-center">
            <Text px="4" className="font-bold">
              Label
            </Text>

            <Text
              px="2"
              className="text-sm bg-[rgb(var(--background-color-2))] rounded-md w-fit h-fit font-mono"
            >
              .checkbox-label
            </Text>
          </Box>

          <PropertyTable
            properties={[
              {
                name: "data-position",
                type: "enum",
                values: '"top" | "bottom" | "left" | "right"',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default CheckboxPage;
