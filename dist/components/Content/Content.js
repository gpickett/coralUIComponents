import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import PanelToolbar from "../Panels/PanelLeftToolbar.js"; // Import to identify toolbar
const Content = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const toolbar = childrenArray.find((child) => React.isValidElement(child) && child.type === PanelToolbar);
    const content = childrenArray.filter((child) => !(React.isValidElement(child) && child.type === PanelToolbar));
    return (_jsxs("div", { className: "content", style: {
            display: "flex",
            flex: "1",
            flexDirection: "column",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            minWidth: '320px',
        }, children: [toolbar && _jsx("div", { style: { flexShrink: 0 }, children: toolbar }), _jsx("div", { className: "panelContent", style: {
                    flex: 1,
                    overflowY: "auto",
                }, children: content })] }));
};
export default Content;
