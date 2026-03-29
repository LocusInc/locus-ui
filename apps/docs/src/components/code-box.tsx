"use client";

import { Button, Flex, Panel, Separator, Text } from "@locus-ui/components";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.min.css";
import "./code-box.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);

interface CodeBoxProps {
  title?: string;
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}

export const CodeBox = ({
  title,
  children,
  language = "plaintext",
  showLineNumbers = false,
}: CodeBoxProps) => {
  const highlighted =
    language !== "plaintext" && hljs.getLanguage(language)
      ? hljs.highlight(children, { language })
      : { value: escapeHtml(children) };

  const lines = splitHighlightedLines(highlighted.value);

  if (lines.length > 1 && lines[lines.length - 1] === "") {
    lines.pop();
  }

  const code = (
    <pre className="code-box">
      <code className={`hljs language-${language}`}>
        {lines.map((line, i) => (
          <span key={i} className="code-box-line">
            {showLineNumbers && (
              <span className="code-box-line-number">{i + 1}</span>
            )}
            <span
              className="code-box-line-content"
              dangerouslySetInnerHTML={{ __html: line || "\n" }}
            />
          </span>
        ))}
      </code>
    </pre>
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(children).catch((err) => {
      console.error("Failed to copy code: ", err);
    });
  };

  if (title) {
    return (
      <Panel variant="outlined" className="overflow-hidden">
        <Flex px="4" py="1" justify="between">
          <Text className="opacity-80">{title}</Text>

          <Button variant="clear" size="sm" onClick={handleCopyCode}>
            Copy
          </Button>
        </Flex>

        <Separator />

        {code}
      </Panel>
    );
  }

  return code;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Splits highlighted HTML into lines while keeping tags properly balanced.
 * highlight.js can produce <span> tags that span across newlines. Naively
 * splitting by "\n" leaves unclosed tags, which causes SSR/client hydration
 * mismatches because the browser "fixes" the HTML differently on each side.
 */
function splitHighlightedLines(html: string): string[] {
  const raw = html.split("\n");
  const result: string[] = [];
  let openTags: string[] = [];

  for (const line of raw) {
    const prefix = openTags.join("");

    const tagRegex = /<(\/?)span([^>]*)>/g;
    let match;
    while ((match = tagRegex.exec(line)) !== null) {
      if (match[1] === "/") {
        openTags.pop();
      } else {
        openTags.push(`<span${match[2]}>`);
      }
    }

    const suffix = "</span>".repeat(openTags.length);
    result.push(prefix + line + suffix);
  }

  return result;
}
