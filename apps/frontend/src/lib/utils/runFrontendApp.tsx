/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file main.tsx
 * @module frontend
 * @since 0.0.0
 * @date 2025-06-29
 */

import { createRoot } from "react-dom/client";
import React from "react";

import "./main.css";

const isDev = import.meta.env.DEV;

export function runFrontendApp(rootId = "root-start", App: React.FC) {
  const rootElement = document.getElementById(rootId);
  if (!rootElement) throw new Error(`Root element "${rootId}" not found`);

  const root = createRoot(rootElement);
  const app = <App />;

  root.render(isDev ? <React.StrictMode>{app}</React.StrictMode> : app);
}

