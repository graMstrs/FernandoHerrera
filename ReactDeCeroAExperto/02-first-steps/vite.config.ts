// import { defineConfig } from 'vite'
import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ReactDeCeroAExperto/02-first-steps/",
  test: {
    environment: "jsdom",
    globals: true,
  },
});
