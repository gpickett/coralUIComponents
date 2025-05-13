import { jsx as _jsx } from "react/jsx-runtime";
import { Toolbar } from "@fluentui/react-components";
const HeaderTools = ({ children }) => {
    return (_jsx(Toolbar, { style: {
            display: "flex",
            flex: "0",
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: "4px 0",
        }, children: children }));
};
export default HeaderTools;
