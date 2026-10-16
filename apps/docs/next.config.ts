import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

// Use the JavaScript MDX pipeline to compile preview fences as pure JSX.
const withMDX = createMDX({
  options: {
    remarkPlugins: [path.resolve("scripts/remark-code-preview.mjs")],
  },
});

export default withMDX(nextConfig);
