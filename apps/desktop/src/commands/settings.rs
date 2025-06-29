/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file settings.rs
 * @module apps\desktop\src\commands
 * @since 0.0.0
 * @date 2025-06-29
 */

use serde::{Deserialize, Serialize};

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

#[tauri::command]
pub fn get_settings() -> AppSettings {
    // In a real application, this would load from file/database
    AppSettings::default()
}

#[tauri::command]
pub fn save_settings(settings: AppSettings) -> Result<(), String> {
    println!("Saving settings: {:?}", settings);
    // In a real application, this would save to file/database
    Ok(())
}
