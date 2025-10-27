import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get all icon files from src/icons (excluding index.ts and .ts animation data files)
const iconsDir = resolve(__dirname, "src/icons");
const iconFiles = readdirSync(iconsDir)
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => file.replace(".tsx", ""));

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        // Add per-icon entries for tree-shaking
        ...iconFiles.reduce(
          (entries, name) => {
            entries[`icons/${name}`] = resolve(
              __dirname,
              `src/icons/${name}.tsx`,
            );
            return entries;
          },
          {} as Record<string, string>,
        ),
      },
      name: "LottieIcons",
      formats: ["es"],
      fileName: (format, entryName) => {
        if (entryName === "index") {
          return `lottie-icons.${format}.js`;
        }
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Preserve module structure for tree-shaking
        preserveModules: false,
        exports: "named",
      },
    },
  },
});
