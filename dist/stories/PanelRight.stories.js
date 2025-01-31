import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1Strong, Button } from "@fluentui/react-components";
import { Add20Regular, Calendar20Regular, Clock20Regular, Cube20Filled, MoreHorizontalRegular, } from "@fluentui/react-icons";
import PanelRight from "../components/Panels/PanelRight.js";
import PanelRightToolbar from "../components/Panels/PanelRightToolbar.js";
export default {
    title: "Components/PanelRight",
    component: PanelRight,
    argTypes: {
        panelWidth: {
            control: { type: "number" },
            defaultValue: 325,
            description: "The default width of the panel in pixels (min: 250, max: 500).",
        },
        panelResize: {
            control: { type: "boolean" },
            defaultValue: true,
            description: "Enables or disables panel resizing.",
        },
        childrenSample: {
            control: { type: "range", min: 1, max: 10, step: 1 },
            defaultValue: 3,
            description: "The number of cards to display inside the panel content.",
        },
        children: {
            table: { disable: true },
        },
        panelType: {
            table: { disable: true },
        },
    },
};
const Template = (args) => {
    // Clamp panelWidth between 250 and 500
    const clampedWidth = Math.min(500, Math.max(250, args.panelWidth));
    return (_jsxs(PanelRight, { panelWidth: clampedWidth, panelResize: args.panelResize, panelType: "first", children: [_jsxs(PanelRightToolbar, { panelIcon: _jsx(Cube20Filled, {}), panelTitle: "Panel Right", children: [_jsx(Button, { appearance: "subtle", icon: _jsx(Add20Regular, {}) }), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) })] }), _jsx("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "0 16px 16px 16px",
                }, children: Array.from({ length: args.childrenSample }).map((_, index) => (_jsx("div", { children: _jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            padding: "12px",
                            border: "1px solid var(--colorNeutralStroke2)",
                            backgroundColor: "var(--colorNeutralBackground1)",
                            borderRadius: "6px",
                        }, children: [_jsxs(Body1Strong, { children: ["Card ", index + 1] }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    color: "var(--colorNeutralForeground3)",
                                }, children: [_jsx(Calendar20Regular, {}), " Today"] }), _jsxs("div", { style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    color: "var(--colorNeutralForeground3)",
                                }, children: [_jsx(Clock20Regular, {}), " 11:30am - 12:15pm"] })] }) }, index))) })] }));
};
export const Default = Template.bind({});
Default.args = {
    panelWidth: 325,
    panelResize: true,
    childrenSample: 3,
};
