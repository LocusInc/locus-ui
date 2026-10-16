"use client";

import { Flex } from "@locus-ui/components";
import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { CodeBox } from "./code-box";

export const PreviewBox = ({
  title,
  column = false,
  featured = false,
  code,
  styles,
  children,
}: {
  title?: string;
  column?: boolean;
  featured?: boolean;
  code?: string;
  styles?: string;
  children: ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasStyles = styles !== undefined;
  const selectedTab = hasStyles ? activeTab : 0;

  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % 2;
        break;
      case "ArrowLeft":
        next = (index + 1) % 2;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveTab(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="docs-preview my-2">
      <Flex
        px="8"
        py="6"
        gap="4"
        wrap="wrap"
        align="center"
        justify="center"
        direction={column ? "column" : "row"}
        className={`docs-preview-content${featured ? " docs-preview-featured" : ""}`}
      >
        {children}
      </Flex>
      {code !== undefined && (
        <div className="docs-preview-source">
          {hasStyles && (
            <div
              className="docs-preview-tabs"
              role="tablist"
              aria-label="Example source"
            >
              {[title ?? "index.tsx", "styles.css"].map((label, index) => (
                <button
                  key={index}
                  ref={(element) => {
                    tabs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${index}`}
                  aria-selected={selectedTab === index}
                  aria-controls={`${id}-panel`}
                  tabIndex={selectedTab === index ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(event) => handleTabKey(event, index)}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
          <div
            id={hasStyles ? `${id}-panel` : undefined}
            role={hasStyles ? "tabpanel" : undefined}
            aria-labelledby={hasStyles ? `${id}-tab-${selectedTab}` : undefined}
          >
            <CodeBox
              key={selectedTab}
              title={selectedTab === 1 ? "styles.css" : title}
              language={selectedTab === 1 ? "css" : "typescript"}
              embedded
            >
              {selectedTab === 1 ? (styles ?? "") : code}
            </CodeBox>
          </div>
        </div>
      )}
    </div>
  );
};
