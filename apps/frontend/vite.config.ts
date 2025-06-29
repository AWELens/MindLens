/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file vite.config.ts
 * @module apps\frontend
 * @since 0.0.0
 * @date 2025-06-28
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
    tsconfigPaths(),
    checker({
      typescript: true,
      // ESLint checker temporarily disabled
      // eslint: {
      //   lintCommand: 'eslint "./src/**/*.{ts,tsx}" --config eslint.config.js',
      //   useFlatConfig: true,
      // },
    }),
  ],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: host || "localhost",
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : true,
    watch: {
      ignored: ["**/target/**", "**/node_modules/**"],
    },
  },
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    target: ["esnext", "chrome100", "safari15"],
    minify: process.env.TAURI_ENV_DEBUG ? false : "esbuild",
    sourcemap: process.env.TAURI_ENV_DEBUG === "true",
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
