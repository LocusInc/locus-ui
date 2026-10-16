import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { toMarkdown } from "@/lib/markdown.mjs";

const directory = path.join(process.cwd(), "src/app/docs");

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await readdir(directory, { recursive: true });
  return files
    .filter((file) => path.basename(file) === "page.mdx")
    .map((file) => {
      const section = path.dirname(file);
      return { slug: ["docs", ...(section === "." ? [] : section.split(path.sep))] };
    });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  if (slug[0] !== "docs" || !slug.every((segment) => /^[a-z0-9-]+$/.test(segment))) {
    return new Response("Not found", { status: 404 });
  }
  try {
    const source = await readFile(path.join(directory, ...slug.slice(1), "page.mdx"), "utf8");
    return new Response(toMarkdown(source), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return new Response("Not found", { status: 404 });
    }
    throw error;
  }
}
