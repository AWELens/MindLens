/**
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file TauriDemo.tsx
 * @module screens
 * @since 0.0.0
 * @date 2025-06-29
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

const TauriDemo: React.FC = () => {
  const [message, setMessage] = useState("");

  // Хуки для різних функцій Tauri
  const { systemInfo, loading: systemLoading, error: systemError } = useSystemInfo();
  const { settings, loading: settingsLoading, saveSettings } = useAppSettings();
  const { showMessage, showConfirm } = useDialogs();
  const { readFile, writeFile } = useFileOperations();

  const {
    execute: getVersion,
    loading: versionLoading,
    data: version,
  } = useAsyncCommand(systemCommands.getAppVersion);

  const handleShowMessage = async () => {
    if (message.trim()) {
      await showMessage.execute("Демонстрація Tauri", message);
      setMessage("");
    }
  };

  const handleShowConfirm = async () => {
    const result = await showConfirm.execute("Підтвердження", "Ви впевнені?");
    if (result.success && result.data) {
      await showMessage.execute("Результат", "Ви натиснули OK");
    } else if (result.success) {
      await showMessage.execute("Результат", "Ви натиснули Скасувати");
    }
  };

  const handleFileWrite = async () => {
    const content = `Тест запису файлу\nЧас: ${new Date().toISOString()}\n`;
    await writeFile.execute("test.txt", content);
  };

  const handleFileRead = async () => {
    const result = await readFile.execute("test.txt");
    if (result.success) {
      await showMessage.execute("Вміст файлу", result.data || "Файл порожній");
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
      <h1>Демонстрація Tauri</h1>

      <section style={{ marginBottom: "20px" }}>
        <h2>Системна інформація</h2>
        {systemLoading && <p>Завантаження...</p>}
        {systemError && <p style={{ color: "red" }}>Помилка: {systemError}</p>}
        {systemInfo && (
          <div>
            <p>
              <strong>Платформа:</strong> {systemInfo.platform}
            </p>
            <p>
              <strong>Архітектура:</strong> {systemInfo.arch}
            </p>
            <p>
              <strong>Версія ОС:</strong> {systemInfo.version}
            </p>
            <p>
              <strong>Ім'я хоста:</strong> {systemInfo.hostname}
            </p>
          </div>
        )}
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Версія застосунку</h2>
        <button
          type="button"
          onClick={() => void getVersion()}
          disabled={versionLoading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {versionLoading ? "Завантаження..." : "Отримати версію"}
        </button>
        {version && <span>Версія: {version}</span>}
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Діалоги</h2>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введіть повідомлення"
          style={{ padding: "8px", marginRight: "10px", width: "200px" }}
        />
        <button
          type="button"
          onClick={() => void handleShowMessage()}
          disabled={showMessage.loading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {showMessage.loading ? "Завантаження..." : "Показати повідомлення"}
        </button>
        <button
          type="button"
          onClick={() => void handleShowConfirm()}
          disabled={showConfirm.loading}
          style={{ padding: "8px 16px" }}
        >
          {showConfirm.loading ? "Завантаження..." : "Показати підтвердження"}
        </button>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Файлові операції</h2>
        <button
          type="button"
          onClick={() => void handleFileWrite()}
          disabled={writeFile.loading}
          style={{ padding: "8px 16px", marginRight: "10px" }}
        >
          {writeFile.loading ? "Запис..." : "Записати файл"}
        </button>
        <button
          type="button"
          onClick={() => void handleFileRead()}
          disabled={readFile.loading}
          style={{ padding: "8px 16px" }}
        >
          {readFile.loading ? "Читання..." : "Прочитати файл"}
        </button>
        {writeFile.error && <p style={{ color: "red" }}>Помилка запису: {writeFile.error}</p>}
        {readFile.error && <p style={{ color: "red" }}>Помилка читання: {readFile.error}</p>}
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Налаштування застосунку</h2>
        {settingsLoading && <p>Завантаження налаштувань...</p>}
        {settings && (
          <div>
            <p>
              <strong>Поточна тема:</strong> {settings.theme}
            </p>
            <div>
              <button
                type="button"
                onClick={() => void handleThemeChange("light")}
                style={{ padding: "8px 16px", marginRight: "10px" }}
              >
                Світла
              </button>
              <button
                type="button"
                onClick={() => void handleThemeChange("dark")}
                style={{ padding: "8px 16px", marginRight: "10px" }}
              >
                Темна
              </button>
              <button
                type="button"
                onClick={() => void handleThemeChange("system")}
                style={{ padding: "8px 16px" }}
              >
                Системна
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default TauriDemo;
