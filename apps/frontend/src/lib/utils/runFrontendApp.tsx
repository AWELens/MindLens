/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file runFrontendApp.tsx
 * @module lib\utils
 * @since 0.0.0
 * @date 2025-06-29
 */

import { createRoot } from "react-dom/client";
import React from "react";

import "./main.css";

/**
 * Renders a React application into a given DOM element.
 * @param rootId - ID of the root DOM element.
 * @param loadApp - Async function returning the root JSX element (e.g., <App />)
 */
export async function runFrontendApp(
  rootId: string,
  loadApp: () => Promise<React.ReactElement>
): Promise<void> {
  const isDev = import.meta.env.DEV;
  const rootElement = document.getElementById(rootId);

  if (!rootElement) {
    throw new Error(`Root element with id "${rootId}" not found`);
  }

  const AppElement = await loadApp();
  const root = createRoot(rootElement);

  root.render(isDev ? <React.StrictMode>{AppElement}</React.StrictMode> : AppElement);
}