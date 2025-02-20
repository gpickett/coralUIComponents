import React from "react";
interface PanelLeftSearchProps {
    selectedItems: Record<string, boolean>;
    setSelectedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}
declare const PanelLeftSearch: React.FC<PanelLeftSearchProps>;
export default PanelLeftSearch;
