"use client";

import { useEffect, useState } from "react";
import { Panel } from "../panel";
import { Portal } from "../portal";
import { Select } from "../select";
import { useTheme } from "./theme-context";

const ThemeControlPosition = [
  "tl",
  "top",
  "tr",
  "left",
  "center",
  "right",
  "bl",
  "bottom",
  "br",
] as const;

interface ThemeControlProps {
  position?: (typeof ThemeControlPosition)[number];
}

export function ThemeControl({ position = "bottom" }: ThemeControlProps) {
  const {
    appearance,
    onAppearanceChange,
    radius,
    onRadiusChange,
    roundness,
    onRoundnessChange,
    spacing,
    onSpacingChange,
  } = useTheme();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.altKey && event.code === "KeyT") {
        event.preventDefault();
        setVisible(!visible);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  return (
    <Portal.Root open={visible} onOpenChange={setVisible}>
      <Portal.Content position={position}>
        <Panel
          variant="outlined"
          m="4"
          p="4"
          className="flex flex-col gap-2 border-[rgba(var(--border-color), 0.6)]"
        >
          <Select.Root
            variant="solid"
            value={appearance}
            onValueChange={(change) => onAppearanceChange?.(change as any)}
          >
            <Select.Label position="inside">Theme Settings</Select.Label>

            <Select.Trigger />

            <Select.Content>
              <Select.Item value="light">Light</Select.Item>
              <Select.Item value="dark">Dark</Select.Item>
            </Select.Content>
          </Select.Root>

          <Select.Root
            variant="solid"
            value={radius}
            onValueChange={(change) => onRadiusChange?.(change as any)}
          >
            <Select.Label position="inside">Radius</Select.Label>

            <Select.Trigger />

            <Select.Content>
              <Select.Item value="none">None</Select.Item>
              <Select.Item value="xs">XS</Select.Item>
              <Select.Item value="sm">SM</Select.Item>
              <Select.Item value="md">MD</Select.Item>
              <Select.Item value="lg">LG</Select.Item>
              <Select.Item value="xl">XL</Select.Item>
              <Select.Item value="full">FULL</Select.Item>
            </Select.Content>
          </Select.Root>

          <Select.Root
            variant="solid"
            value={roundness}
            onValueChange={(change) => onRoundnessChange?.(change as any)}
          >
            <Select.Label className="min-w-40!" position="inside">
              Roundness
            </Select.Label>

            <Select.Trigger />

            <Select.Content>
              <Select.Item value="1">1</Select.Item>
              <Select.Item value="2">2</Select.Item>
              <Select.Item value="3">3</Select.Item>
              <Select.Item value="4">4</Select.Item>
              <Select.Item value="5">5</Select.Item>
              <Select.Item value="6">6</Select.Item>
            </Select.Content>
          </Select.Root>

          <Select.Root
            variant="solid"
            value={spacing}
            onValueChange={(change) => onSpacingChange?.(change as any)}
          >
            <Select.Label position="inside">Spacing</Select.Label>

            <Select.Trigger />

            <Select.Content>
              <Select.Item value="xs">XS</Select.Item>
              <Select.Item value="sm">SM</Select.Item>
              <Select.Item value="md">MD</Select.Item>
              <Select.Item value="lg">LG</Select.Item>
              <Select.Item value="xl">XL</Select.Item>
            </Select.Content>
          </Select.Root>
        </Panel>
      </Portal.Content>
    </Portal.Root>
  );
}
