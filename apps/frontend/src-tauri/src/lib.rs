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

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let builder = tauri::Builder::default().setup(|app| {
    #[cfg(debug_assertions)]
    {
      app.handle().plugin(
        tauri_plugin_log::Builder ::default()
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

