"use client";

import { Button, Flex, Panel, Separator, Text } from "@locus-ui/components";
import { useState } from "react";
import { CodeBox } from "./code-box";

export const PreviewBox: React.FC<{
  title?: string;
  column?: boolean;
  code?: string;
  children: React.ReactNode;
}> = ({ title, column = false, code, children }) => {
  const [showCode, setShowCode] = useState(false);

  const handleCopyCode = () => {
    if (!code) return;

    navigator.clipboard.writeText(code).catch((err) => {
      console.error("Failed to copy code: ", err);
    });
  };

  return (
    <Panel
      variant="outlined"
      my="2"
      className="min-h-fit bg-[rgb(var(--bg-1))]! overflow-hidden"
    >
      <Flex
        px="8"
        py="4"
        gap="4"
        wrap="wrap"
        align="center"
        justify="center"
        direction={column ? "column" : "row"}
      >
        {children}
      </Flex>

      {code !== undefined && (
        <Flex direction="column" className="bg-[rgb(var(--surface-1))]!">
          <Flex
            className={`${showCode ? "max-h-250" : "max-h-0"} overflow-hidden transition-all`}
            direction="column"
          >
            <Separator />

            <Flex px="4" py="1" justify="between">
              <Text className="opacity-80">{title}</Text>

              <Button variant="clear" size="sm" onClick={handleCopyCode}>
                Copy
              </Button>
            </Flex>

            <Separator />

            <CodeBox language="typescript">{code}</CodeBox>
          </Flex>

          <Separator />

          <Flex justify="center">
            <Button
              py="1"
              className="w-full cursor-pointer"
              onClick={() => setShowCode(!showCode)}
            >
              <Text>{showCode ? "Hide Code" : "Show Code"}</Text>
            </Button>
          </Flex>
        </Flex>
      )}
    </Panel>
  );
};
