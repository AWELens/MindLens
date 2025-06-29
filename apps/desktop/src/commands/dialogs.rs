/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file dialogs.rs
 * @module apps\desktop\src\commands
 * @since 0.0.0
 * @date 2025-06-29
 */

#[tauri::command]
pub fn show_message(title: String, message: String) {
    println!("Message: {} - {}", title, message);
    // In a real application, this would show a dialog
}

#[tauri::command]
pub fn show_confirm(title: String, message: String) -> bool {
    println!("Confirm: {} - {}", title, message);
    // In a real application, this would show a confirmation dialog
    // Returning true for demonstration purposes
    true
}
