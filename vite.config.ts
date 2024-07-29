import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
