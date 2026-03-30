import { Text } from "@locus-ui/components";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 id={slugify(props.children)}>
        <Text mt="8" mb="4" className="text-4xl font-bold" {...props} />
      </h1>
    ),
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
        className="bg-[rgb(var(--panel-color))] text-[rgb(var(--text-color))] px-1 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ),
    ...components,
  };
}

function slugify(children: React.ReactNode): string {
  const text = typeof children === "string" ? children : "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
