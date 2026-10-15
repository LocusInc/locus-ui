import { readdir, readFile, mkdir, writeFile, rm } from "node:fs/promises";
import { watch } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { toMarkdown } from "./markdown.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "src/app/docs");
const destination = path.join(root, "public/markdown/docs");

async function generate() {
  const pages = (await readdir(source, { recursive: true })).filter((file) => file.endsWith("page.mdx"));
  const documents = await Promise.all(pages.map(async (file) => {
    const slug = path.dirname(file);
    const target = slug === "." ? `${destination}.md` : path.join(destination, `${slug}.md`);
    try {
      return [target, toMarkdown(await readFile(path.join(source, file), "utf8"))];
    } catch (error) {
      throw new Error(`Cannot export ${file}: ${error.message}`, { cause: error });
    }
  }));
  await rm(destination, { recursive: true, force: true });
  for (const [target, markdown] of documents) {
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, markdown);
  }
  console.log(`Exported ${documents.length} documentation pages as Markdown.`);
}

await generate();
if (process.argv.includes("--watch")) {
  let timer;
  let pending = Promise.resolve();
  watch(source, { recursive: true }, (_event, file) => {
    if (!file?.endsWith(".mdx")) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      pending = pending.then(generate).catch((error) => console.error(error));
    }, 150);
  });
}
