import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "tests/setup.tsx",
    css: true,
  },
});
