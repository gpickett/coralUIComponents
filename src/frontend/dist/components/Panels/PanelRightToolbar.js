import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1Strong, Button } from "@fluentui/react-components";
import eventBus from "../eventbus.js";
import { Dismiss } from "../../imports/bundleicons.js";
const PanelRightToolbar = ({ panelTitle, panelIcon, 
//   panelType = "first", // Default value set here
children, }) => {
    const handleDismiss = () => {
        eventBus.emit("setActivePanel", null); // Close the current panel
    };
    return (_jsxs("div", { className: "panelToolbar", style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            boxSizing: "border-box",
            height: "56px",
            gap: "8px",
        }, children: [_jsxs("div", { className: "panelTitle", style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 1 auto",
                    overflow: "hidden",
                }, children: [panelIcon && (_jsx("div", { style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                        }, children: panelIcon })), panelTitle && (_jsx(Body1Strong, { style: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }, children: panelTitle }))] }), _jsxs("div", { className: "panelTools", style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0px",
                }, children: [children, _jsx(Button, { appearance: "subtle", icon: _jsx(Dismiss, {}), onClick: handleDismiss, "aria-label": "Close panel" })] })] }));
};
export default PanelRightToolbar;
