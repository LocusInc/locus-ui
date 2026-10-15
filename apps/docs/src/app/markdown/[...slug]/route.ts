import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const directory = path.join(process.cwd(), "public/markdown");

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await readdir(directory, { recursive: true });
  return files.filter((file) => file.endsWith(".md")).map((file) => ({
    slug: file.slice(0, -3).split(path.sep),
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  if (!slug.every((segment) => /^[a-z0-9-]+$/.test(segment))) {
    return new Response("Not found", { status: 404 });
  }
  try {
    const markdown = await readFile(path.join(directory, `${slug.join("/")}.md`), "utf8");
    return new Response(markdown, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return new Response("Not found", { status: 404 });
    }
    throw error;
  }
}
