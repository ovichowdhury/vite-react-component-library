import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { relative, extname } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ["lib"], entryRoot: "lib", outDir: "dist" }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      formats: ["es"],
      name: "MyLibrary",
      // fileName: (format) => `main.${format}.js`,
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
