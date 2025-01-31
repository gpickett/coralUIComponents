import React, { ReactNode } from "react";
interface PanelLeftToolbarProps {
    panelIcon?: ReactNode;
    panelTitle?: string | null;
    children?: ReactNode;
}
declare const PanelLeftToolbar: React.FC<PanelLeftToolbarProps>;
export default PanelLeftToolbar;
