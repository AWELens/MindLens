/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file main.tsx
 * @module 
 * @since 0.0.0
 * @date 2025-06-28
 */

import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import "./main.css";

const isDev = process.env.NODE_ENV !== "production";

const rootElement = document.getElementById("entrypoint");
if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);

root.render(
  isDev ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  ),
);
