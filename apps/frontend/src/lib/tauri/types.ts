


export interface TauriResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}


export interface SystemInfo {
  platform: string;
  arch: string;
  version: string;
  hostname: string;
}


export interface FileInfo {
  name: string;
  path: string;
  size: number;
  isFile: boolean;
  isDirectory: boolean;
  modified: string;
}


export interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
}


export interface DialogOptions {
  title?: string;
  defaultPath?: string;
  filters?: FileFilter[];
}

export interface FileFilter {
  name: string;
  extensions: string[];
}


export interface AppSettings {
  theme: "light" | "dark" | "system";
  language: string;
  autoStart: boolean;
  notifications: boolean;
}


export interface TauriEvent<T = unknown> {
  event: string;
  payload: T;
  id: number;
  windowLabel: string;
}


export type LogLevel = "trace" | "debug" | "info" | "warn" | "error";

export interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  target?: string;
}
