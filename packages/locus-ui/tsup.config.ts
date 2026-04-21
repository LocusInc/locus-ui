import { defineConfig } from "tsup";

export default defineConfig((overrideOptions) => [
  {
    entry: ["src/**/*.{ts,tsx}"],
    outDir: "dist",
    format: ["esm", "cjs"],
    dts: false,
    target: "esnext",
    sourcemap: true,
    shims: true,
    clean: !overrideOptions.watch,
    bundle: false,
    external: ["react", "react-dom"],
  },
  {
    entry: ["src/index.css"],
    outDir: "dist",
    clean: false,
  },
]);
