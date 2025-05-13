import { defineConfig } from "tsdown";

export default defineConfig({
    dts: {
        emitDtsOnly: true,
    },
    entry: "./src/index.ts",
    outDir: "./dist",
    treeshake: true
});