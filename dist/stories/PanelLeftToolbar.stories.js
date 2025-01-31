import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@fluentui/react-components";
import { Add20Regular, Cube20Filled, MoreHorizontalRegular } from "@fluentui/react-icons";
import PanelLeftToolbar from "../components/Panels/PanelLeftToolbar.js";
export default {
    title: "Components/PanelLeft/PanelLeftToolbar",
    component: PanelLeftToolbar,
    argTypes: {
        panelIcon: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Toggle to show or hide the icon in the toolbar.",
        },
        panelTitle: {
            control: { type: "text" },
            defaultValue: "Panel Left Toolbar",
            description: "The title displayed in the toolbar. Leave empty to remove.",
        },
        children: {
            table: { disable: true },
            description: "Toolbar tools (e.g., buttons) rendered as children.",
        },
    },
};
const Template = (args) => (_jsxs(PanelLeftToolbar, { panelIcon: args.panelIcon ? _jsx(Cube20Filled, {}) : null, panelTitle: args.panelTitle, children: [_jsx(Button, { appearance: "subtle", icon: _jsx(Add20Regular, {}) }), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) })] }));
export const Default = Template.bind({});
Default.args = {
    panelTitle: "Panel Left Toolbar",
    panelIcon: true,
};
