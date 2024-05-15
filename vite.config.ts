/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: process.env.VITE_BASE_API_URL || "/",
  // define: {
  //   "process.env.VITE_BASE_API_URL":
  //     process.env.VITE_BASE_API_URL || "http:localhost:3000",
  // },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "src/tests/setup.ts",
  },
});
