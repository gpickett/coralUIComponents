import React, { ReactNode } from "react";
interface PanelRightProps {
    panelWidth?: number;
    panelResize?: boolean;
    panelType: "first" | "second" | "third" | "fourth";
    children?: ReactNode;
}
declare const PanelRight: React.FC<PanelRightProps>;
export default PanelRight;
