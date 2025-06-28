/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file global.d.ts
 * @module global
 * @since 0.0.0
 * @date 2025-06-28
 */

declare global {
  interface Window {
    // Tauri API
    __TAURI__?: {
      core?: {
        invoke: <T>(cmd: string, args?: Record<string, unknown>) => Promise<T>;
      };
      window?: {
        appWindow?: {
          listen: <T>(event: string, handler: (event: T) => void) => Promise<void>;
          emit: (event: string, payload?: unknown) => Promise<void>;
          close: () => Promise<void>;
          minimize: () => Promise<void>;
          maximize: () => Promise<void>;
        };
      };
      fs?: {
        readTextFile: (path: string) => Promise<string>;
        writeTextFile: (path: string, contents: string) => Promise<void>;
      };
    };

    // Electron API
    __ELECTRON__?: {
      ipcRenderer?: {
        invoke: (channel: string, ...args: unknown[]) => Promise<unknown>;
        on: (channel: string, listener: (...args: unknown[]) => void) => void;
      };
    };

    // Development tools
    __REDUX_DEVTOOLS_EXTENSION__?: {
      connect: (options?: Record<string, unknown>) => unknown;
    };

    // Runtime data
    __APP_VERSION__?: string;
    __BUILD_TIME__?: string;
    __COMMIT_HASH__?: string;
    __FEATURE_FLAGS__?: Record<string, boolean>;
  }

  // Расширение Node.js process
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly VITE_APP_TITLE?: string;
      readonly VITE_API_URL?: string;
      readonly VITE_ENABLE_DEVTOOLS?: string;
    }
  }

  // Пользовательские глобальные типы
  interface MindLensGlobals {
    registry: PluginRegistry;
    eventBus: EventBus;
    logger: Logger;
    config: AppConfig;
  }

  // Добавляем в Window
  interface Window {
    MindLens?: MindLensGlobals;
  }
}
