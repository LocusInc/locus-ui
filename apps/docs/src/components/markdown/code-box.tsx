"use client";

import { useTheme } from "@locus-ui/components";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import { Fragment, useEffect, useId, useState } from "react";
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
  maxLines?: number;
  className?: string;
  /** Render inside a preview panel without another border or title bar. */
  embedded?: boolean;
}

export const CodeBox = ({
  title,
  children,
  language = "plaintext",
  showLineNumbers = false,
  maxLines = 0,
  className,
  embedded = false,
}: CodeBoxProps) => {
  const { appearance } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const codeId = useId();

  const highlighted =
    language !== "plaintext" && hljs.getLanguage(language)
      ? hljs.highlight(children, { language })
      : { value: escapeHtml(children) };

  const lines = splitHighlightedLines(highlighted.value);

  if (lines.length > 1 && lines[lines.length - 1] === "") {
    lines.pop();
  }

  const isTruncated = maxLines > 0 && lines.length > maxLines;
  const visibleLines =
    isTruncated && !expanded ? lines.slice(0, maxLines) : lines;

  return (
    <div
      data-code-theme={appearance === "dark" ? "dark" : "light"}
      className={`code-panel ${embedded ? "code-panel-embedded" : ""} ${className ?? ""}`}
    >
      {title && !embedded && <div className="code-panel-title">{title}</div>}
      <div className="code-panel-body">
        <CopyCodeButton code={children} />
        <pre
          className="code-box"
          tabIndex={0}
          aria-label={title ?? `${language} code`}
        >
          <code id={codeId} className={`hljs language-${language}`}>
            {visibleLines.map((line, i) => (
              <Fragment key={i}>
                <span className="code-box-line">
                  {showLineNumbers && (
                    <span className="code-box-line-number" aria-hidden="true">
                      {i + 1}
                    </span>
                  )}
                  <span
                    className="code-box-line-content"
                    dangerouslySetInnerHTML={{ __html: line || " " }}
                  />
                </span>
                {i < visibleLines.length - 1 && "\n"}
              </Fragment>
            ))}
          </code>
        </pre>
      </div>
      {isTruncated && (
        <button
          type="button"
          className="code-box-toggle"
          aria-expanded={expanded}
          aria-controls={codeId}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded
            ? "Show less"
            : `Show ${lines.length - maxLines} more lines`}
        </button>
      )}
    </div>
  );
};

function CopyCodeButton({ code }: { code: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  const label =
    status === "copied"
      ? "Copied!"
      : status === "error"
        ? "Copy failed. Try again."
        : "Copy code to clipboard";

  return (
    <>
      <button
        type="button"
        className="code-copy"
        aria-label={label}
        title={label}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(code);
            setStatus("copied");
          } catch {
            setStatus("error");
          }
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {status === "copied" ? (
            <path d="m5 12 4 4L19 6" />
          ) : (
            <>
              <rect x="8" y="8" width="12" height="13" rx="2" />
              <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
            </>
          )}
        </svg>
      </button>
      <span className="sr-only" role="status">
        {status === "idle" ? "" : label}
      </span>
    </>
  );
}

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
