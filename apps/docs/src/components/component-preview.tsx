"use client";

import { Box, Flex, Panel, Text } from "@locus-ui/components";
import Link from "next/link";
import { useState } from "react";
import { CodeBox } from "./code-box";

interface Code {
  title: string;
  code: string;
}

interface ComponentPreviewProps {
  /** The code string to display in the code tab */
  codeSnippets: Code[];
  /** The live rendered component(s) */
  children: React.ReactNode;
  /** The source URL for the component preview */
  source?: string;
}

export const ComponentPreview = ({
  codeSnippets,
  children,
  source,
}: ComponentPreviewProps) => {
  const [activeSnippet, setActiveSnippet] = useState<Code>(codeSnippets?.[0]);

  return (
    <Flex direction="column" gap="2" className="w-full">
      <Panel variant="outlined" className="min-h-fit overflow-hidden">
        <Box
          p="4"
          radius="none"
          className="flex items-center justify-center min-h-40! bg-linear-to-br from-[rgba(var(--secondary),0.5)] to-[rgba(var(--tertiary),0.5)]"
        >
          {children}
        </Box>

        <Box
          radius="none"
          className="flex gap-0 border-y border-[rgb(var(--panel-color))] bg-[rgb(var(--background-color-2))]"
        >
          {codeSnippets?.map((snippet) => (
            <TabButton
              key={snippet.title}
              active={activeSnippet.title === snippet.title}
              onClick={() => setActiveSnippet(snippet)}
            >
              {snippet.title}
            </TabButton>
          ))}
        </Box>

        <Box radius="none" className="overflow-auto">
          <CodeBox language="typescript">{activeSnippet.code}</CodeBox>
        </Box>
      </Panel>

      {source !== undefined && (
        <Flex justify="end">
          <Link href={source} target="_">
            <Text className="text-sm color-[rgb(var(--primary))]! hover:underline">
              View Source
            </Text>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium cursor-pointer transition-colors border-b-2 bg-transparent ${
      active
        ? "border-[rgb(var(--primary))] text-[rgb(var(--primary))]"
        : "border-transparent text-[rgb(var(--foreground-color))] opacity-60 hover:opacity-100"
    }`}
  >
    {children}
  </button>
);
