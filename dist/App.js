import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import PanelRight from "./components/Panels/PanelRight.js";
import { Avatar, Button, ToggleButton, ToolbarButton, ToolbarDivider } from "@fluentui/react-components";
import { Bookmark20Filled, DocumentSparkle20Filled, MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
import "./index.css";
import Content from "./components/Content/Content.js";
import ContentToolbar from "./components/Content/ContentToolbar.js";
import { Bookmark, Cube, DocumentSparkle, DrawerArrowDownload, Search, Sparkle } from "./imports/bundleicons.js";
import PanelRightFourth from "./PanelRightFourth.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";
import PanelLeftSearch from "./modules/PanelLeftSearch.js";
import Dashboard from "./modules/Dashboard.js"; // <-- Import the dashboard
const App = () => {
    const [selectedItems, setSelectedItems] = useState({});
    return (_jsxs("div", { style: { display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", backgroundColor: "var(--colorNeutralBackground3)" }, children: [_jsx(Header, { subtitle: "Coral", children: _jsxs(HeaderTools, { children: [_jsx(Avatar, {}), _jsx(ToolbarDivider, {}), _jsxs(PanelRightToggles, { children: [_jsx(ToggleButton, { appearance: "subtle", icon: _jsx(Sparkle, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(DocumentSparkle, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(Bookmark, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(DrawerArrowDownload, {}) })] }), _jsx(ToolbarDivider, {}), _jsx(ToolbarButton, { icon: _jsx(Cube, {}) }), _jsx(ToolbarButton, { icon: _jsx(Cube, {}) })] }) }), _jsxs("div", { style: { display: "flex", flex: 1, overflow: "hidden" }, children: [_jsx("div", { style: { flexShrink: 0, display: "flex", overflow: "hidden" }, children: _jsx(PanelLeftSearch, { selectedItems: selectedItems, setSelectedItems: setSelectedItems }) }), _jsxs(Content, { children: [_jsxs(ContentToolbar
                            // panelIcon={<Cube20Filled />}
                            , { 
                                // panelIcon={<Cube20Filled />}
                                panelTitle: "Dashboard", children: [_jsx(Button, { appearance: "subtle", icon: _jsx(Search, {}) }), _jsx(ToolbarDivider, {}), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) })] }), _jsx("div", { children: _jsx(Dashboard, { selectedItems: selectedItems }) })] }), _jsxs(PanelRight, { panelWidth: 450, panelResize: true, panelType: "first", children: [_jsx(PanelRightToolbar, { panelTitle: "Copilot", panelIcon: _jsx(Sparkle20Filled, {}), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }), _jsx("div", { style: { padding: "0 16px 16px 16px" }, children: _jsx("p", { children: "This is the content inside the first panel." }) })] }), _jsxs(PanelRight, { panelResize: true, panelType: "second", children: [_jsx(PanelRightToolbar, { panelTitle: "Documents", panelIcon: _jsx(DocumentSparkle20Filled, {}), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }), _jsxs("div", { style: { padding: "0 16px 16px 16px" }, children: [_jsx("p", { children: "This is the content inside the second panel." }), _jsx("p", { children: "It swaps with the previous panel when toggled." })] })] }), _jsxs(PanelRight, { panelResize: true, panelType: "third", children: [_jsx(PanelRightToolbar, { panelTitle: "Bookmarks", panelIcon: _jsx(Bookmark20Filled, {}), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }), _jsxs("div", { style: { padding: "0 16px 16px 16px" }, children: [_jsx("p", { children: "This is the content inside the third panel." }), _jsx("p", { children: "It swaps with the previous panel when toggled." })] })] }), _jsx(PanelRightFourth, {})] })] }));
};
export default App;
