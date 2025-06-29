/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file files.rs
 * @module apps\desktop\src\commands
 * @since 0.0.0
 * @date 2025-06-29
 */

use std::fs;

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
