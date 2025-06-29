/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file system.rs
 * @module apps\desktop\src\commands
 * @since 0.0.0
 * @date 2025-06-29
 */

use serde::{Deserialize, Serialize};
use tauri::AppHandle;

#[derive(Debug, Serialize, Deserialize)]
pub struct SystemInfo {
    platform: String,
    arch: String,
    version: String,
    hostname: String,
}

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
