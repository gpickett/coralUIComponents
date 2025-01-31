import React from "react";
import PanelRight from "./components/Panels/PanelRight.js";
import { Button, ToolbarButton, ToolbarDivider } from "@fluentui/react-components";
import { DrawerArrowDownload20Filled, MoreHorizontalRegular, } from "@fluentui/react-icons";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";




const PanelRightFourth: React.FC = () => {
    return (

        <div>

            {/* Right Secondary Panel */}
            <PanelRight panelResize={true} panelType="fourth">
                <PanelRightToolbar
                    panelTitle="File download"
                    panelIcon={<DrawerArrowDownload20Filled />}
                // panelType="second" // Explicitly set
                >
                    {/* Additional toolbar actions */}
                    <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
                </PanelRightToolbar>

                {/* Second Panel Content */}
                <div style={{ padding: "0 16px 16px 16px" }}>
                    <p>This is the content inside the fourth panel.</p>
                    <p>It swaps with the previous panel when toggled.</p>
                </div>
            </PanelRight>
        </div>
    );
};

export default PanelRightFourth;
