## App.tsx Overview

This file defines the root layout and interactive shell of the Coral system. It serves as the entry point for the app's frame and UI regions, connecting reusable components, panels, and feature modules.

---


### 🧩 Component Prop Notes

#### `Header`
- `title`: App/system title
- `subtitle`: Optional supporting label
- `logo`: Optional branding/logo slot

#### `PanelRightToggles`
Each `ToggleButton` maps to a corresponding right-side panel. Visibility is typically controlled by local state within the header toggles component (not shown here).

#### `PanelLeft`
- `panelWidth`: Numeric width (px) for sidebar
- `panelResize`: Enables user resizing of left panel

#### `PanelLeftToolbar`
- `panelTitle`: Title displayed in top of left panel
- `panelIcon`: Optional icon for panel header

#### `ContentToolbar`
- `panelTitle`: Primary section title
- `panelIcon`: Optional Fluent icon to display beside title
- `children`: Slot for contextual tools (e.g. search, overflow menu)

#### `Chat`
This is a frontend-rendered LLM chat shell.
- `apiUrl`: Backend endpoint to POST input and chat history
- `apiKey`: Optional API key passed to backend (if required)
- `isAzureFoundry`: Boolean toggle for Azure-specific request formatting
- `userId`: Required for identity persistence + chat history isolation

#### `CoralShellColumn`
- Internal layout wrapper for full-height column layout
- Typically wraps header and horizontal shell

#### `CoralShellRow`
- Internal layout wrapper for full-width row layout
- Wraps all major page zones (left, center, right)

---

### 📦 Notes for Extension
- Right panel components (`PanelRightFirst`, etc.) can be swapped or extended freely.
- Chat props can be overridden to support any LLM backend with the same input/history shape.
- Wrapper layout components (`CoralShell*`) are intended for system-wide reuse.

For structural consistency and DX clarity, all shared components are located in `coral.config/components/` and all pre-wired modules are in `coral.config/modules/`.
