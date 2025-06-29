

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


export const systemCommands = {

  getSystemInfo: (): Promise<TauriResponse<SystemInfo>> =>
    invokeCommand<SystemInfo>("get_system_info"),


  getAppVersion: (): Promise<TauriResponse<string>> => invokeCommand<string>("get_app_version"),


  restartApp: (): Promise<TauriResponse<void>> => invokeCommand<void>("restart_app"),


  exitApp: (): Promise<TauriResponse<void>> => invokeCommand<void>("exit_app"),
};


export const fileCommands = {

  readTextFile: (path: string): Promise<TauriResponse<string>> =>
    invokeCommand<string>("read_text_file", { path }),


  writeTextFile: (path: string, content: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("write_text_file", { path, content }),


  getFileInfo: (path: string): Promise<TauriResponse<FileInfo>> =>
    invokeCommand<FileInfo>("get_file_info", { path }),


  listDirectory: (path: string): Promise<TauriResponse<FileInfo[]>> =>
    invokeCommand<FileInfo[]>("list_directory", { path }),


  createDirectory: (path: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("create_directory", { path }),


  deleteFile: (path: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("delete_file", { path }),
};


export const dialogCommands = {

  showSaveDialog: (options?: DialogOptions): Promise<TauriResponse<string>> =>
    invokeCommand<string>("show_save_dialog", { options }),


  showOpenDialog: (options?: DialogOptions): Promise<TauriResponse<string[]>> =>
    invokeCommand<string[]>("show_open_dialog", { options }),


  showMessage: (title: string, message: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("show_message", { title, message }),


  showConfirm: (title: string, message: string): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("show_confirm", { title, message }),
};


export const notificationCommands = {

  showNotification: (options: NotificationOptions): Promise<TauriResponse<void>> =>
    invokeCommand<void>("show_notification", { options }),


  checkNotificationPermission: (): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("check_notification_permission"),


  requestNotificationPermission: (): Promise<TauriResponse<boolean>> =>
    invokeCommand<boolean>("request_notification_permission"),
};


export const settingsCommands = {

  getSettings: (): Promise<TauriResponse<AppSettings>> =>
    invokeCommand<AppSettings>("get_settings"),


  saveSettings: (settings: AppSettings): Promise<TauriResponse<void>> =>
    invokeCommand<void>("save_settings", { settings }),


  resetSettings: (): Promise<TauriResponse<void>> => invokeCommand<void>("reset_settings"),
};


export const logCommands = {

  writeLog: (level: LogLevel, message: string): Promise<TauriResponse<void>> =>
    invokeCommand<void>("write_log", { level, message }),


  getLogs: (limit?: number): Promise<TauriResponse<string[]>> =>
    invokeCommand<string[]>("get_logs", { limit }),


  clearLogs: (): Promise<TauriResponse<void>> => invokeCommand<void>("clear_logs"),
};
