import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PanelLeft from "./components/Panels/PanelLeft.js";
import { Avatar, Button, ToggleButton, ToolbarDivider, } from "@fluentui/react-components";
import { MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import "./index.css";
import Content from "./components/Content/Content.js";
import ContentToolbar from "./components/Content/ContentToolbar.js";
import { Bookmark, DocumentSparkle, DrawerArrowDownload, Search, Sparkle, } from "./imports/bundleicons.js";
import PanelRightFourth from "./PanelRightFourth.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";
import PanelRightThird from "./PanelRightThird.js";
import PanelRightSecond from "./PanelRightSecond.js";
import PanelRightFirst from "./PanelRightFirst.js";
import PanelLeftToolbar from "./components/Panels/PanelLeftToolbar.js";
import Chat from "./modules/Chat.js";
const App = () => {
    return (_jsxs("div", { style: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "var(--colorNeutralBackground3)",
        }, children: [_jsx(Header, { title: "Microsoft", subtitle: "Coral", logo: null, children: _jsxs(HeaderTools, { children: [_jsx(Avatar, {}), _jsx(ToolbarDivider, {}), _jsxs(PanelRightToggles, { children: [_jsx(ToggleButton, { appearance: "subtle", icon: _jsx(Sparkle, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(DocumentSparkle, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(Bookmark, {}) }), _jsx(ToggleButton, { appearance: "subtle", icon: _jsx(DrawerArrowDownload, {}) })] })] }) }), _jsxs("div", { style: { display: "flex", flex: 1, overflow: "hidden" }, children: [_jsx("div", { style: { flexShrink: 0, display: "flex", overflow: "hidden" }, children: _jsx(PanelLeft, { panelWidth: 280, panelResize: true, children: _jsx(PanelLeftToolbar, { panelTitle: 'Panel Left' // Defines the Title for the left panel
                                , panelIcon: null }) }) }), _jsxs(Content, { children: [_jsxs(ContentToolbar
                            // panelIcon={<Cube20Filled />}
                            , { 
                                // panelIcon={<Cube20Filled />}
                                panelTitle: "Copilot", panelIcon: _jsx(Sparkle20Filled, {}), children: [_jsx(Button, { appearance: "subtle", icon: _jsx(Search, {}) }), _jsx(ToolbarDivider, {}), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) })] }), _jsx(Chat, { apiUrl: "http://localhost:5000" // Ensure this is correct
                                , apiKey: "" // API Key (only needed for OpenAI & Azure OpenAI)
                                , 
                                // deploymentName="my-deployment" // Only needed for Azure OpenAI & Foundry
                                isAzureFoundry: false, userId: "user123" // Unique user ID (for multi-turn memory)
                             })] }), _jsx(PanelRightFirst, {}), _jsx(PanelRightSecond, {}), _jsx(PanelRightThird, {}), _jsx(PanelRightFourth, {})] })] }));
};
export default App;
