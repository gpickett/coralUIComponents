import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PanelRight from "./components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import { MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
const PanelRightFirst = () => {
    return (_jsx("div", { children: _jsxs(PanelRight, { panelWidth: 450, panelResize: true, panelType: "first" // Connected to PanelRightToggles in the header.
            , children: [_jsx(PanelRightToolbar, { panelTitle: "Copilot", panelIcon: _jsx(Sparkle20Filled, {}), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }), _jsx("div", { style: { padding: "0 16px 16px 16px" }, children: _jsx("p", { children: "This is the content inside the first panel." }) })] }) }));
};
export default PanelRightFirst;
