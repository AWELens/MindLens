/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file main.tsx
 * @module bootstrap
 * @since 0.0.0
 * @date 2025-06-29
 */

import { runFrontendApp } from "./lib/utils/runFrontendApp";
import "./main.css";

/**
 * Bootstraps the MindLens frontend into the specified root element.
 * Uses lazy dynamic import for flexibility and future extension.
 */
runFrontendApp("root-start", async () => {
  const { default: App } = await import("./App");
  return <App />;
});
