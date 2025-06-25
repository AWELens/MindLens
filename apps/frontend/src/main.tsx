import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";

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
