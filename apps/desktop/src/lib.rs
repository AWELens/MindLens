/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file lib.rs
 * @module apps\desktop\src
 * @since 0.0.0
 * @date 2025-06-29
 */

mod commands;

use commands::*;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let builder = tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            // System commands
            get_system_info,
            get_app_version,
            restart_app,
            exit_app,
            // File commands
            read_text_file,
            write_text_file,
            // Dialog commands
            show_message,
            show_confirm,
            // Settings commands
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
