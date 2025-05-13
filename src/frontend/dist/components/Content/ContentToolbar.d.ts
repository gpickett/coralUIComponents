import React, { ReactNode } from "react";
interface ContentToolbarProps {
    panelIcon?: ReactNode;
    panelTitle?: string | null;
    children?: ReactNode;
}
declare const ContentToolbar: React.FC<ContentToolbarProps>;
export default ContentToolbar;
