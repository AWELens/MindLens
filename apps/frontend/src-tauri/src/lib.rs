/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file lib.rs
 * @module apps\frontend\src-tauri\src
 * @since 0.0.0
 * @date 2025-06-28
 */

use tauri::{AppHandle, Manager};
use serde::{Deserialize, Serialize};
use std::fs;

#[derive(Debug, Serialize, Deserialize)]
pub struct SystemInfo {
    platform: String,
    arch: String,
    version: String,
    hostname: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AppSettings {
    theme: String,
    language: String,
    auto_start: bool,
    notifications: bool,
}

impl Default for AppSettings {
    fn default() -> Self {
        Self {
            theme: "system".to_string(),
            language: "en".to_string(),
            auto_start: false,
            notifications: true,
        }
    }
}

// Команды Tauri
#[tauri::command]
pub fn get_system_info() -> SystemInfo {
    SystemInfo {
        platform: std::env::consts::OS.to_string(),
        arch: std::env::consts::ARCH.to_string(),
        version: std::env::var("OS").unwrap_or_else(|_| "Unknown".to_string()),
        hostname: hostname::get()
            .unwrap_or_default()
            .to_string_lossy()
            .to_string(),
    }
}

#[tauri::command]
pub fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
pub fn restart_app(app: AppHandle) {
    app.restart();
}

#[tauri::command]
pub fn exit_app(app: AppHandle) {
    app.exit(0);
}

#[tauri::command]
pub fn read_text_file(path: String) -> Result<String, String> {
    fs::read_to_string(&path)
        .map_err(|e| format!("Failed to read file {}: {}", path, e))
}

#[tauri::command]
pub fn write_text_file(path: String, content: String) -> Result<(), String> {
    fs::write(&path, content)
        .map_err(|e| format!("Failed to write file {}: {}", path, e))
}

#[tauri::command]
pub fn show_message(title: String, message: String) {
    println!("Message: {} - {}", title, message);
    // В реальном приложении здесь будет показ диалога
}

#[tauri::command]
pub fn show_confirm(title: String, message: String) -> bool {
    println!("Confirm: {} - {}", title, message);
    // В реальном приложении здесь будет показ диалога подтверждения
    // Пока возвращаем true для демонстрации
    true
}

#[tauri::command]
pub fn get_settings() -> AppSettings {
    // В реальном приложении здесь будет загрузка из файла/базы данных
    AppSettings::default()
}

#[tauri::command]
pub fn save_settings(settings: AppSettings) -> Result<(), String> {
    println!("Saving settings: {:?}", settings);
    // В реальном приложении здесь будет сохранение в файл/базу данных
    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let builder = tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
        get_system_info,
        get_app_version,
        restart_app,
        exit_app,
        read_text_file,
        write_text_file,
        show_message,
        show_confirm,
        get_settings,
        save_settings
    ])
    .setup(|app| {
      #[cfg(debug_assertions)]
      {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    });

  builder
    .run(tauri::generate_context!())
    .expect("error while running Tauri application");
}

