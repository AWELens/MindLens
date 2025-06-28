/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */

import { useCallback, useEffect, useState } from "react";
import { listen } from "@tauri-apps/api/event";

import type { AppSettings, SystemInfo, TauriEvent, TauriResponse } from "./types";
import {
  dialogCommands,
  fileCommands,
  logCommands,
  notificationCommands,
  settingsCommands,
  systemCommands,
} from "./commands";

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useAsyncCommand<T, A extends unknown[] = []>(
  command: (...args: A) => Promise<TauriResponse<T>>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async (...args: A) => {
      setLoading(true);
      setError(null);

      try {
        const response = await command(...args);

        if (response.success) {
          setData(response.data ?? null);
        } else {
          setError(response.error ?? "Unknown error");
        }

        return response;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        setError(errorMessage);
        return { success: false, error: errorMessage } as TauriResponse<T>;
      } finally {
        setLoading(false);
      }
    },
    [command],
  );

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { execute, loading, error, data, reset };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useSystemInfo() {
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshSystemInfo = useCallback(async () => {
    setLoading(true);
    setError(null);

    const response = await systemCommands.getSystemInfo();

    if (response.success) {
      setSystemInfo(response.data ?? null);
    } else {
      setError(response.error ?? "Failed to get system info");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    void refreshSystemInfo();
  }, [refreshSystemInfo]);

  return { systemInfo, loading, error, refresh: refreshSystemInfo };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useAppSettings() {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadSettings = useCallback(async () => {
    setLoading(true);
    setError(null);

    const response = await settingsCommands.getSettings();

    if (response.success) {
      setSettings(response.data ?? null);
    } else {
      setError(response.error ?? "Failed to load settings");
    }

    setLoading(false);
  }, []);

  const saveSettings = useCallback(async (newSettings: AppSettings) => {
    setLoading(true);
    setError(null);

    const response = await settingsCommands.saveSettings(newSettings);

    if (response.success) {
      setSettings(newSettings);
    } else {
      setError(response.error ?? "Failed to save settings");
    }

    setLoading(false);
    return response;
  }, []);

  const resetSettings = useCallback(async () => {
    setLoading(true);
    setError(null);

    const response = await settingsCommands.resetSettings();

    if (response.success) {
      await loadSettings(); // Перезагружаем настройки после сброса
    } else {
      setError(response.error ?? "Failed to reset settings");
    }

    setLoading(false);
    return response;
  }, [loadSettings]);

  useEffect(() => {
    void loadSettings();
  }, [loadSettings]);

  return {
    settings,
    loading,
    error,
    saveSettings,
    resetSettings,
    refresh: loadSettings,
  };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useTauriEvent<T = unknown>(eventName: string) {
  const [lastEvent, setLastEvent] = useState<TauriEvent<T> | null>(null);
  const [events, setEvents] = useState<TauriEvent<T>[]>([]);

  useEffect(() => {
    const unlisten = listen<T>(eventName, (event) => {
      const tauriEvent: TauriEvent<T> = {
        event: event.event,
        payload: event.payload,
        id: Math.random(), // Tauri не предоставляет ID
        windowLabel: "main", // Используем значение по умолчанию
      };

      setLastEvent(tauriEvent);
      setEvents((prev) => [...prev, tauriEvent]);
    });

    return () => {
      void unlisten.then((fn) => fn());
    };
  }, [eventName]);

  const clearEvents = useCallback(() => {
    setEvents([]);
    setLastEvent(null);
  }, []);

  return { lastEvent, events, clearEvents };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useFileOperations() {
  const readFile = useAsyncCommand(fileCommands.readTextFile);
  const writeFile = useAsyncCommand(fileCommands.writeTextFile);
  const getFileInfo = useAsyncCommand(fileCommands.getFileInfo);
  const listDirectory = useAsyncCommand(fileCommands.listDirectory);
  const createDirectory = useAsyncCommand(fileCommands.createDirectory);
  const deleteFile = useAsyncCommand(fileCommands.deleteFile);

  return {
    readFile,
    writeFile,
    getFileInfo,
    listDirectory,
    createDirectory,
    deleteFile,
  };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useDialogs() {
  const showSaveDialog = useAsyncCommand(dialogCommands.showSaveDialog);
  const showOpenDialog = useAsyncCommand(dialogCommands.showOpenDialog);
  const showMessage = useAsyncCommand(dialogCommands.showMessage);
  const showConfirm = useAsyncCommand(dialogCommands.showConfirm);

  return {
    showSaveDialog,
    showOpenDialog,
    showMessage,
    showConfirm,
  };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useNotifications() {
  const showNotification = useAsyncCommand(notificationCommands.showNotification);
  const checkPermission = useAsyncCommand(notificationCommands.checkNotificationPermission);
  const requestPermission = useAsyncCommand(notificationCommands.requestNotificationPermission);

  return {
    showNotification,
    checkPermission,
    requestPermission,
  };
}

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file hooks.ts
 * @module lib\tauri
 * @since 0.0.0
 * @date 2025-06-28
 */
export function useLogging() {
  const writeLog = useAsyncCommand(logCommands.writeLog);
  const getLogs = useAsyncCommand(logCommands.getLogs);
  const clearLogs = useAsyncCommand(logCommands.clearLogs);

  return {
    writeLog,
    getLogs,
    clearLogs,
  };
}
