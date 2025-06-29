/*
 * @author Andrii Volynets
 * @project mindlens
 * @license APGL
 * @version 0.0.0
 * @file mod.rs
 * @module apps\desktop\src\commands
 * @since 0.0.0
 * @date 2025-06-29
 */

pub mod system;
pub mod files;
pub mod dialogs;
pub mod settings;

// Re-export all command functions
pub use system::*;
pub use files::*;
pub use dialogs::*;
pub use settings::*;
