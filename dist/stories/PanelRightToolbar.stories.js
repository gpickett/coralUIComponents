import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "@fluentui/react-components";
import { Cube20Filled, MoreHorizontalRegular, } from "@fluentui/react-icons";
import PanelRightToolbar from "../components/Panels/PanelRightToolbar.js";
export default {
    title: "Components/PanelRight/PanelRightToolbar",
    component: PanelRightToolbar,
    argTypes: {
        panelIcon: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Toggle to show or hide the icon in the toolbar.",
        },
        panelTitle: {
            control: { type: "text" },
            defaultValue: "Panel Right Toolbar",
            description: "The title displayed in the toolbar. Leave empty to remove.",
        },
        onDismiss: {
            control: false,
            description: "Optional dismiss button handler. If provided, shows a dismiss button.",
        },
        children: {
            table: { disable: true },
            description: "Toolbar tools (e.g., buttons) rendered as children.",
        },
    },
};
const Template = (args) => (_jsx(PanelRightToolbar, { panelIcon: args.panelIcon ? _jsx(Cube20Filled, {}) : null, panelTitle: args.panelTitle, handleDismiss: () => alert("Panel dismissed!"), children: _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) }) }));
export const Default = Template.bind({});
Default.args = {
    panelTitle: "Panel Right Toolbar",
    panelIcon: true, // Default to showing the icon
};
