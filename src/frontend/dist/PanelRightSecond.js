import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PanelRight from "./components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import { DocumentSparkle20Filled, MoreHorizontalRegular, } from "@fluentui/react-icons";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
const PanelRightSecond = () => {
    return (_jsx("div", { children: _jsxs(PanelRight, { panelResize: true, panelType: "second" // Connected to PanelRightToggles in the header.
            , children: [_jsx(PanelRightToolbar, { panelTitle: "Documents", panelIcon: _jsx(DocumentSparkle20Filled, {}), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }), _jsxs("div", { style: { padding: "0 16px 16px 16px" }, children: [_jsx("p", { children: "This is the content inside the second panel." }), _jsx("p", { children: "It swaps with the previous panel when toggled." })] })] }) }));
};
export default PanelRightSecond;
