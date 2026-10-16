"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  const linksRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ top: number; height: number } | null>(null);

  useLayoutEffect(() => {
    const links = linksRef.current;
    if (!links) return;

    const updateIndicator = () => {
      const activeLink = links.querySelector<HTMLAnchorElement>('[aria-current="location"]');
      if (!activeLink) return;

      const next = { top: activeLink.offsetTop, height: activeLink.offsetHeight };
      setIndicator((previous) =>
        previous?.top === next.top && previous.height === next.height ? previous : next,
      );
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(links);
    links.querySelectorAll("a").forEach((link) => observer.observe(link));
    return () => observer.disconnect();
  }, [activeId, headings]);

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
    <nav aria-label="On this page" className="w-full min-w-0">
      <div ref={linksRef} className="relative flex min-w-0 flex-col gap-1">
        {indicator && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-px bg-[rgb(var(--primary))] transition-[transform,height] duration-200 ease-out motion-reduce:transition-none"
            style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
          />
        )}
        {headings.map((heading) => {
          const isActive = heading.id === (activeId || headings[0]?.id);
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={(event) => handleLinkClick(event, heading.id)}
              className={`block min-w-0 border-l border-transparent py-0.5 whitespace-normal [overflow-wrap:anywhere] transition-colors hover:text-[rgb(var(--primary))] ${
                isActive
                  ? "text-[rgb(var(--primary))]"
                  : "text-[rgb(var(--text))]"
              }`}
              style={{ paddingLeft: `${8 + (heading.level - 1) * 12}px` }}
            >
              {heading.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
