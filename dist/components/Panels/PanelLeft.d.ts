import React, { ReactNode } from "react";
interface PanelLeftProps {
    panelWidth?: number;
    panelResize?: boolean;
    children?: ReactNode;
}
declare const PanelLeft: React.FC<PanelLeftProps>;
export default PanelLeft;
