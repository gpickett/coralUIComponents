import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1Strong } from "@fluentui/react-components";
const PanelLeftToolbar = ({ panelIcon, panelTitle, children, }) => {
    return (_jsxs("div", { className: "panelToolbar", style: {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "16px",
            boxSizing: "border-box",
            height: "56px",
        }, children: [(panelIcon || panelTitle) && (_jsxs("div", { className: "panelTitle", style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    flex: "1 1 auto",
                    overflow: "hidden", // Ensure title section is contained
                }, children: [panelIcon && (_jsx("div", { style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                        }, children: panelIcon })), panelTitle && (_jsx(Body1Strong, { style: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }, children: panelTitle }))] })), _jsx("div", { className: "panelTools", style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0",
                }, children: children })] }));
};
export default PanelLeftToolbar;
