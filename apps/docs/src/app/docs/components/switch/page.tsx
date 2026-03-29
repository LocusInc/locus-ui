"use client";

import { Container, Switch, Text } from "@locus-ui/components";

const SwitchPage = () => {
  const labelPositions = ["top", "bottom", "left", "right"] as const;
  const variants = ["outlined", "solid", "muted"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const alignments = ["start", "center", "end"] as const;
  const colors = [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "success",
    "danger",
    "warning",
    "info",
  ] as const;

  return (
    <Container className="p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Switch Component</Text>

      <div className="flex flex-col gap-2">
        <Text mt="4" className="font-bold">
          Label Positions
        </Text>

        <div className="flex gap-8">
          {labelPositions.map((position) => (
            <Switch key={position} variant="muted">
              <Switch.Label position={position}>{position}</Switch.Label>
            </Switch>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          Variants
        </Text>

        <div className="flex gap-4">
          {variants.map((variant) => (
            <Switch key={variant} variant={variant}>
              <Switch.Label>{variant}</Switch.Label>
            </Switch>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          Colors
        </Text>

        <div className="flex gap-4">
          {colors.map((color) => (
            <Switch defaultChecked key={color} variant="muted" color={color}>
              <Switch.Label>{color}</Switch.Label>
            </Switch>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          Sizes
        </Text>

        <div className="flex gap-4">
          {sizes.map((size) => (
            <Switch key={size} size={size} variant="muted">
              <Switch.Label>{size}</Switch.Label>
            </Switch>
          ))}

          <Switch size="40px" variant="muted">
            <Switch.Label>Custom Size</Switch.Label>
          </Switch>
        </div>

        <Text mt="4" className="font-bold">
          Alignments
        </Text>

        <div className="flex gap-4">
          {alignments.map((alignment) => (
            <Switch key={alignment} align={alignment} variant="muted">
              <Switch.Label>
                {alignment} alignment. This alignment puts the components in the{" "}
                {alignment} position relative to each other.
              </Switch.Label>
            </Switch>
          ))}
        </div>

        <Text mt="4" className="font-bold">
          States
        </Text>

        <div className="flex gap-4">
          <Switch disabled variant="muted">
            <Switch.Label>Disabled</Switch.Label>
          </Switch>

          <Switch readonly variant="muted">
            <Switch.Label>Readonly</Switch.Label>
          </Switch>

          <Switch defaultChecked variant="muted">
            <Switch.Label>Default Checked</Switch.Label>
          </Switch>
        </div>
      </div>
    </Container>
  );
};

export default SwitchPage;
