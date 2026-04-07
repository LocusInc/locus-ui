"use client";

import { useEffect, useState } from "react";
import { Box } from "../box";
import { Button } from "../button";
import { Flex } from "../flex";
import { Panel } from "../panel";
import { Portal } from "../portal";
import { Separator } from "../separator";
import { Text } from "../text";
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
    primary,
    onPrimaryChange,
    secondary,
    onSecondaryChange,
    tertiary,
    onTertiaryChange,
  } = useTheme();

  const [visible, setVisible] = useState(false);

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "gray",
    "maroon",
    "magenta",
    "cyan",
    "lime",
    "navy",
    "teal",
    "white",
  ] as const;

  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"] as const;

  const spacings = ["xs", "sm", "md", "lg", "xl"] as const;

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
    <>
      <Panel
        variant="muted"
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 9999,
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          className="sm:hidden flex"
          aria-label="Toggle theme control"
          onClick={() => setVisible((v) => !v)}
        >
          Theme
        </Button>
      </Panel>

      <Portal.Root open={visible} onOpenChange={setVisible}>
        <Portal.Content position={position}>
          <Panel
            variant="outlined"
            m="4"
            p="4"
            style={{ backgroundColor: "rgb(var(--bg-1))" }}
          >
            <Flex direction="column" gap="2">
              <Flex justify="between" align="center">
                <Text className="text-lg font-bold">Theme Control</Text>

                <Flex gap="2">
                  <Button
                    size="sm"
                    variant={appearance === "light" ? "solid" : "outlined"}
                    onClick={() => onAppearanceChange?.("light")}
                  >
                    Light
                  </Button>

                  <Button
                    size="sm"
                    variant={appearance === "dark" ? "solid" : "outlined"}
                    onClick={() => onAppearanceChange?.("dark")}
                  >
                    Dark
                  </Button>
                </Flex>
              </Flex>

              <Separator />

              <Flex direction="column" gap="2">
                <Text>Primary Color</Text>

                <Flex
                  gap="1"
                  wrap="wrap"
                  style={{
                    maxWidth: 400,
                  }}
                >
                  {colors.map((color) => (
                    <Box
                      color={color}
                      key={color}
                      p="1"
                      className={
                        primary === color
                          ? "border"
                          : "border border-transparent"
                      }
                    >
                      <Button
                        className="w-10 min-h-10"
                        variant="solid"
                        color={color}
                        onClick={() => onPrimaryChange?.(color)}
                      />
                    </Box>
                  ))}
                </Flex>
              </Flex>

              <Separator />

              <Flex direction="column" gap="2" className="flex-1">
                <Text>Radius</Text>

                <Flex gap="1" wrap="wrap" className="flex-1">
                  {radii.map((rad) => (
                    <Button
                      key={rad}
                      radius="md"
                      variant="outlined"
                      className="flex-1"
                      style={{ padding: 8, maxWidth: 50, maxHeight: 50 }}
                      onClick={() => onRadiusChange?.(rad)}
                    >
                      <Box
                        radius="none"
                        radius-tl={rad}
                        style={{
                          height: 30,
                          borderTopWidth: rad === radius ? 3 : 1,
                          borderLeftWidth: rad === radius ? 3 : 1,
                          borderColor:
                            rad !== radius
                              ? appearance === "dark"
                                ? "white"
                                : "black"
                              : "",
                        }}
                      />
                    </Button>
                  ))}
                </Flex>
              </Flex>

              <Separator />

              <Flex direction="column" gap="2">
                <Text>Spacing</Text>

                <Flex gap="2" wrap="wrap">
                  {spacings.map((space) => (
                    <Button
                      key={space}
                      onClick={() => onSpacingChange?.(space)}
                    >
                      <Panel
                        px="4"
                        color={space === spacing ? "primary" : undefined}
                        spacing={space}
                        variant="outlined"
                      >
                        <Text>{space.toUpperCase()}</Text>
                      </Panel>
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Panel>
        </Portal.Content>
      </Portal.Root>
    </>
  );
}
