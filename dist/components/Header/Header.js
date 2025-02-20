import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Subtitle2 } from "@fluentui/react-components";
import MsftColor from "../../imports/MsftColor.tsx"; // Default icon component
const Header = ({ logo, title = "Microsoft", subtitle, children }) => {
    return (_jsxs("header", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            backgroundColor: "var(--colorNeutralBackgroundAlpha)",
            borderBottom: "1px solid var(--colorNeutralStroke2)",
            padding: "16px",
            height: "64px",
            boxSizing: "border-box",
            gap: "12px",
        }, "data-figma-component": "Header", children: [_jsxs("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                }, children: [_jsx(Avatar, { shape: "square", color: null, icon: logo || _jsx(MsftColor, {}) }), _jsxs(Subtitle2, { style: { whiteSpace: "nowrap", marginTop: "-2px" }, children: [title, subtitle && (_jsxs("span", { style: { fontWeight: "400" }, children: [" | ", subtitle] }))] })] }), children] }));
};
export default Header;
