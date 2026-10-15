"use client";

import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function DocsPageTitle({ children, className, ...props }: ComponentProps<"h1">) {
  const pathname = usePathname();
  return (
    <div className="mt-8 mb-4 flex flex-wrap items-center justify-between gap-4">
      <h1 {...props} className={`text-4xl font-bold ${className ?? ""}`}>
        {children}
      </h1>
      <a
        href={`/markdown${pathname.replace(/\/$/, "")}`}
        className="shrink-0 text-sm opacity-70 hover:opacity-100 hover:underline"
      >
        Markdown
      </a>
    </div>
  );
}
