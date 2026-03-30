"use client";

import { Box, Flex, Text } from "@locus-ui/components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const TableOfContents = () => {
  const pathname = usePathname();

  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const activeIndex = Math.max(
    0,
    headings.findIndex((h) => h.id === activeId),
  );

  useEffect(() => {
    const content = document.querySelector("[data-docs-content]");
    if (!content) return;

    const elements = content.querySelectorAll("h1, h2, h3");
    const items: TocItem[] = Array.from(elements).map((el) => {
      if (!el.id) {
        el.id = slugify(el.textContent ?? "");
      }
      return {
        id: el.id,
        text: el.textContent ?? "",
        level: Number(el.tagName[1]),
      };
    });

    setHeadings(items);
    setActiveId("");
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      let currentId = headings[0]?.id ?? "";

      for (const { id } of headings) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 20) {
          currentId = id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    document.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: true,
    });
    handleScroll();

    return () =>
      document.removeEventListener("scroll", handleScroll, { capture: true });
  }, [headings]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setActiveId(id);
  };

  if (headings.length === 0) return null;

  return (
    <nav>
      <Flex gap="2">
        <Box
          className="w-px h-6 bg-[rgb(var(--primary))] transition-all"
          style={{ marginTop: 28 * activeIndex }}
        />

        <Flex direction="column" gap="1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(event) => handleLinkClick(event, heading.id)}
            >
              <Text
                className="text-nowrap transition-colors !hover:color-[rgb(var(--primary))]"
                style={{
                  paddingLeft: `${(heading.level - 1) * 12}px`,
                  color:
                    activeId === heading.id
                      ? "rgb(var(--primary)) !important"
                      : "rgb(var(--text-color))",
                }}
              >
                {heading.text}
              </Text>
            </a>
          ))}
        </Flex>
      </Flex>
    </nav>
  );
};
