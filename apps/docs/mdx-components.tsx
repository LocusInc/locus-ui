import { Text } from "@locus-ui/components";
import type { MDXComponents } from "mdx/types";
import type { ReactElement, ReactNode } from "react";
import { DocsPageTitle } from "./src/components/docs-page";
import { CodeBox } from "./src/components/markdown/code-box";
import { PreviewBox } from "./src/components/markdown/preview-box";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PreviewBox,
    pre: ({ children }) => {
      const code = children as ReactElement<{
        children: string;
        className?: string;
      }>;
      const language =
        code.props.className?.replace("language-", "") ?? "plaintext";
      const aliases: Record<string, string> = {
        tsx: "typescript",
        ts: "typescript",
        jsx: "javascript",
        js: "javascript",
        sh: "bash",
      };
      return (
        <CodeBox
          title={language === "bash" || language === "sh" ? "Terminal" : "Code"}
          language={aliases[language] ?? language}
          className="my-2"
        >
          {code.props.children}
        </CodeBox>
      );
    },
    h1: (props) => <DocsPageTitle id={slugify(props.children)} {...props} />,
    h2: (props) => (
      <h2 id={slugify(props.children)}>
        <Text mt="8" mb="4" className="text-3xl font-semibold" {...props} />
      </h2>
    ),
    h3: (props) => (
      <h3 id={slugify(props.children)}>
        <Text mt="8" mb="4" className="text-xl font-semibold" {...props} />
      </h3>
    ),
    p: (props) => <Text as="span" {...props} />,
    code: (props) => (
      <code
        className="bg-[rgb(var(--surface-1))] text-[rgb(var(--text))] px-1 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ),
    ...components,
  };
}

function slugify(children: ReactNode): string {
  const text = typeof children === "string" ? children : "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
