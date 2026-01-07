"use client";

import { Text } from "../text";
import { useTheme } from "./theme-context";

export function ThemeControl() {
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

  return (
    <div className="flex flex-col gap-2">
      <label>
        <Text>Appearance:</Text>
      </label>
      <select
        value={appearance ?? ""}
        onChange={(e) => onAppearanceChange?.(e.target.value as any)}
      >
        <option value="light">
          <Text>Light</Text>
        </option>
        <option value="dark">
          <Text>Dark</Text>
        </option>
      </select>

      <label>
        <Text>Radius:</Text>
      </label>
      <select
        value={radius ?? ""}
        onChange={(e) => onRadiusChange?.(e.target.value as any)}
      >
        <option value="xs">
          <Text>XS</Text>
        </option>
        <option value="sm">
          <Text>SM</Text>
        </option>
        <option value="md">
          <Text>MD</Text>
        </option>
        <option value="lg">
          <Text>LG</Text>
        </option>
        <option value="xl">
          <Text>XL</Text>
        </option>
        <option value="full">
          <Text>FULL</Text>
        </option>
      </select>

      <label>
        <Text>Roundness:</Text>
      </label>
      <select
        value={roundness ?? ""}
        onChange={(e) => onRoundnessChange?.(e.target.value as any)}
      >
        <option value="1">
          <Text>1</Text>
        </option>
        <option value="2">
          <Text>2</Text>
        </option>
        <option value="3">
          <Text>3</Text>
        </option>
        <option value="4">
          <Text>4</Text>
        </option>
        <option value="5">
          <Text>5</Text>
        </option>
        <option value="6">
          <Text>6</Text>
        </option>
      </select>

      <label>
        <Text>Spacing:</Text>
      </label>
      <select
        value={spacing ?? ""}
        onChange={(e) => onSpacingChange?.(e.target.value as any)}
      >
        <option value="xs">
          <Text>XS</Text>
        </option>
        <option value="sm">
          <Text>SM</Text>
        </option>
        <option value="md">
          <Text>MD</Text>
        </option>
        <option value="lg">
          <Text>LG</Text>
        </option>
        <option value="xl">
          <Text>XL</Text>
        </option>
      </select>
    </div>
  );
}
