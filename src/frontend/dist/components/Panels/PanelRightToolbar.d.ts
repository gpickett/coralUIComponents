import React, { ReactNode } from "react";
interface PanelRightToolbarProps {
    panelTitle?: string | null;
    panelIcon?: ReactNode;
    children?: ReactNode;
    handleDismiss?: () => void;
}
declare const PanelRightToolbar: React.FC<PanelRightToolbarProps>;
export default PanelRightToolbar;
