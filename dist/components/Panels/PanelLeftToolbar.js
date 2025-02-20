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
                    flexShrink: 1,
                    overflow: "hidden",
                    minWidth: 0, // Prevents breaking layout when shrinking
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
                    flexGrow: 1,
                    justifyContent: "flex-end",
                    minWidth: 0, // Prevents layout breaking when content shrinks
                }, children: children })] }));
};
export default PanelLeftToolbar;
