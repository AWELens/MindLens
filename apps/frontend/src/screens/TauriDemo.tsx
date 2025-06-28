/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */

import React, { useState } from "react";

import {
  useAppSettings,
  useAsyncCommand,
  useDialogs,
  useFileOperations,
  useSystemInfo,
  systemCommands,
} from "../lib/tauri";

/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */
const TauriDemo: React.FC = () => {
  const [message, setMessage] = useState("");

  // Хуки для различных функций Tauri
  const { systemInfo, loading: systemLoading, error: systemError } = useSystemInfo();
  const { settings, loading: settingsLoading, saveSettings } = useAppSettings();
  const { showMessage, showConfirm } = useDialogs();
  const { readFile, writeFile } = useFileOperations();

  // Команда для получения версии приложения
  const {
    execute: getVersion,
    loading: versionLoading,
    data: version,
  } = useAsyncCommand(systemCommands.getAppVersion);

  const handleShowMessage = async () => {
    if (message.trim()) {
      await showMessage.execute("Tauri Demo", message);
      setMessage("");
    }
  };

  const handleShowConfirm = async () => {
    const result = await showConfirm.execute("Подтверждение", "Вы уверены?");
    if (result.success && result.data) {
      await showMessage.execute("Результат", "Вы нажали OK");
    } else if (result.success) {
      await showMessage.execute("Результат", "Вы нажали Cancel");
    }
  };

  const handleFileWrite = async () => {
    const content = `Тест записи файла\nВремя: ${new Date().toISOString()}\n`;
    await writeFile.execute("test.txt", content);
  };

  const handleFileRead = async () => {
    const result = await readFile.execute("test.txt");
    if (result.success) {
      await showMessage.execute("Содержимое файла", result.data || "Файл пуст");
    }
  };

  const handleThemeChange = async (theme: "light" | "dark" | "system") => {
    if (settings) {
      await saveSettings({
        ...settings,
        theme,
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Tauri Demo</h1>

      {/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Системная информация</h2>
        {systemLoading && <p>Загрузка...</p>}
        {systemError && <p style={{ color: "red" }}>Ошибка: {systemError}</p>}
        {systemInfo && (
          <div>
            <p>
              <strong>Платформа:</strong> {systemInfo.platform}
            </p>
            <p>
              <strong>Архитектура:</strong> {systemInfo.arch}
            </p>
            <p>
              <strong>Версия ОС:</strong> {systemInfo.version}
            </p>
            <p>
              <strong>Имя хоста:</strong> {systemInfo.hostname}
            </p>
          </div>
        )}
      </section>

      {/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Версия приложения</h2>
        <button
          type="button"
          onClick={() => void getVersion()}
          disabled={versionLoading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {versionLoading ? "Загрузка..." : "Получить версию"}
        </button>
        {version && <span>Версия: {version}</span>}
      </section>

      {/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Диалоги</h2>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение"
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <button
          type="button"
          onClick={() => void handleShowMessage()}
          disabled={showMessage.loading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {showMessage.loading ? "Загрузка..." : "Показать сообщение"}
        </button>
        <button
          type="button"
          onClick={() => void handleShowConfirm()}
          disabled={showConfirm.loading}
          style={{ padding: "8px 16px" }}
        >
          {showConfirm.loading ? "Загрузка..." : "Показать подтверждение"}
        </button>
      </section>

      {/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Файловые операции</h2>
        <button
          type="button"
          onClick={() => void handleFileWrite()}
          disabled={writeFile.loading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {writeFile.loading ? "Записываю..." : "Записать файл"}
        </button>
        <button
          type="button"
          onClick={() => void handleFileRead()}
          disabled={readFile.loading}
          style={{ padding: "8px 16px" }}
        >
          {readFile.loading ? "Читаю..." : "Прочитать файл"}
        </button>
        {writeFile.error && <p style={{ color: "red" }}>Ошибка записи: {writeFile.error}</p>}
        {readFile.error && <p style={{ color: "red" }}>Ошибка чтения: {readFile.error}</p>}
      </section>

      {/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-28
 */}
      <section style={{ marginBottom: "20px" }}>
        <h2>Настройки приложения</h2>
        {settingsLoading && <p>Загрузка настроек...</p>}
        {settings && (
          <div>
            <p>
              <strong>Текущая тема:</strong> {settings.theme}
            </p>
            <div>
              <button
                type="button"
                onClick={() => void handleThemeChange("light")}
                style={{ padding: "8px 16px", marginRight: "10px" }}
              >
                Светлая
              </button>
              <button
                type="button"
                onClick={() => void handleThemeChange("dark")}
                style={{ padding: "8px 16px", marginRight: "10px" }}
              >
                Темная
              </button>
              <button
                type="button"
                onClick={() => void handleThemeChange("system")}
                style={{ padding: "8px 16px" }}
              >
                Системная
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TauriDemo;
