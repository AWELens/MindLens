/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */

import { invoke } from "@tauri-apps/api/core";

import type {
  TauriResponse,
  SystemInfo,
  FileInfo,
  NotificationOptions,
  DialogOptions,
  AppSettings,
  LogLevel,
} from "./types";

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
async function invokeCommand<T>(
  command: string,
  args?: Record<string, unknown>,
): Promise<TauriResponse<T>> {
  try {
    const result = await invoke<T>(command, args);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const systemCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  getSystemInfo: (): Promise<TauriResponse<SystemInfo>> =>
    invokeCommand<SystemInfo>("get_system_info"),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  getAppVersion: (): Promise<TauriResponse<string>> => invokeCommand<string>("get_app_version"),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  restartApp: (): Promise<TauriResponse<void>> => invokeCommand<void>("restart_app"),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  exitApp: (): Promise<TauriResponse<void>> => invokeCommand<void>("exit_app"),
};

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const fileCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  readTextFile: (path: string): Promise<TauriResponse<string>> =>
    invokeCommand<string>("read_text_file", { path }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  writeTextFile: (path: string, content: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("write_text_file", { path, content }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  getFileInfo: (path: string): Promise<TauriResponse<FileInfo>> =>
    invokeCommand<FileInfo>("get_file_info", { path }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  listDirectory: (path: string): Promise<TauriResponse<FileInfo[]>> =>
    invokeCommand<FileInfo[]>("list_directory", { path }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  createDirectory: (path: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("create_directory", { path }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  deleteFile: (path: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("delete_file", { path }),
};

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const dialogCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  showSaveDialog: (options?: DialogOptions): Promise<TauriResponse<string>> =>
    invokeCommand<string>("show_save_dialog", { options }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  showOpenDialog: (options?: DialogOptions): Promise<TauriResponse<string[]>> =>
    invokeCommand<string[]>("show_open_dialog", { options }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  showMessage: (title: string, message: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("show_message", { title, message }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  showConfirm: (title: string, message: string): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("show_confirm", { title, message }),
};

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const notificationCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  showNotification: (options: NotificationOptions): Promise<TauriResponse<void>> =>
    invokeCommand<void>("show_notification", { options }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  checkNotificationPermission: (): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("check_notification_permission"),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  requestNotificationPermission: (): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("request_notification_permission"),
};

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const settingsCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  getSettings: (): Promise<TauriResponse<AppSettings>> =>
    invokeCommand<AppSettings>("get_settings"),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  saveSettings: (settings: AppSettings): Promise<TauriResponse<void>> =>
    invokeCommand<void>("save_settings", { settings }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  resetSettings: (): Promise<TauriResponse<void>> => invokeCommand<void>("reset_settings"),
};

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export const logCommands = {
  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  writeLog: (level: LogLevel, message: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("write_log", { level, message }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  getLogs: (limit?: number): Promise<TauriResponse<string[]>> =>
    invokeCommand<string[]>("get_logs", { limit }),

  /**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file commands.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
  clearLogs: (): Promise<TauriResponse<void>> => invokeCommand<void>("clear_logs"),
};
