/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface TauriResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface SystemInfo {
  platform: string;
  arch: string;
  version: string;
  hostname: string;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface FileInfo {
  name: string;
  path: string;
  size: number;
  isFile: boolean;
  isDirectory: boolean;
  modified: string;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface DialogOptions {
  title?: string;
  defaultPath?: string;
  filters?: FileFilter[];
}

export interface FileFilter {
  name: string;
  extensions: string[];
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface AppSettings {
  theme: "light" | "dark" | "system";
  language: string;
  autoStart: boolean;
  notifications: boolean;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export interface TauriEvent<T = unknown> {
  event: string;
  payload: T;
  id: number;
  windowLabel: string;
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file types.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export type LogLevel = "trace" | "debug" | "info" | "warn" | "error";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  target?: string;
}
