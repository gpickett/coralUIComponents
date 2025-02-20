import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1Strong, Button, Tag } from "@fluentui/react-components";
import { Add20Regular, Calendar20Regular, Cube20Filled, MoreHorizontalRegular, } from "@fluentui/react-icons";
import Content from "../components/Content/Content";
import ContentToolbar from "../components/Content/ContentToolbar";
/** ✅ Define `Meta<typeof Content>` separately from Storybook Args */
const meta = {
    title: "Components/Content",
    component: Content,
    parameters: {
        controls: { expanded: true },
    },
    argTypes: {
        children: { table: { disable: true } }, // ✅ Hides `children` from Storybook controls
    },
};
export default meta;
/** ✅ Define the story with Storybook-only args */
const Template = (args) => {
    return (_jsx("div", { style: {
            backgroundColor: "var(--colorNeutralBackground3)",
            width: "100%",
            height: "100%",
            maxWidth: "1200px",
            boxSizing: "border-box",
        }, children: _jsxs(Content, { children: [_jsxs(ContentToolbar, { panelIcon: _jsx(Cube20Filled, {}), panelTitle: "Content", children: [_jsx(Button, { appearance: "subtle", icon: _jsx(Add20Regular, {}) }), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontalRegular, {}) })] }), _jsx("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", padding: "16px" }, children: Array.from({ length: args.childrenSample }).map((_, index) => (_jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid var(--colorNeutralStroke2)",
                            backgroundColor: "var(--colorNeutralBackground1)",
                            borderRadius: "6px",
                            padding: "12px",
                        }, children: [_jsx("div", { style: {
                                    height: "128px",
                                    width: "100%",
                                    backgroundColor: "var(--colorNeutralBackground2)",
                                    borderRadius: "8px 8px 0 0",
                                } }), _jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }, children: [_jsxs(Body1Strong, { children: ["Card ", index + 1] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", color: "var(--colorNeutralForeground3)" }, children: [_jsx(Calendar20Regular, {}), " Today"] }), _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", color: "var(--colorNeutralForeground3)" }, children: [_jsx(Calendar20Regular, {}), " 11:30am - 12:15pm"] }), _jsxs("div", { style: { display: "flex", gap: "4px" }, children: [_jsx(Tag, { size: "small", children: "Jellyfish" }), _jsx(Tag, { size: "small", children: "Anemone" }), _jsx(Tag, { size: "small", children: "Eel" })] })] })] }, index))) })] }) }));
};
/** ✅ Create story using Storybook args */
export const Default = Template.bind({});
Default.args = {
    childrenSample: 3, // ✅ Now correctly controlled by Storybook without interfering with `Content`
};
