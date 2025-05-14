import React from "react";
import PanelRight from "./coral.config/components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import {
  DrawerArrowDownload20Filled,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import PanelRightToolbar from "./coral.config/components/Panels/PanelRightToolbar.js";

const PanelRightFourth: React.FC = () => {
  return (
    <div>
      <PanelRight
      panelResize={true} // Defines if the panel can be resized or not
      panelType="fourth" // Connected to PanelRightToggles in the header.
      >
        <PanelRightToolbar
          panelTitle="File download"
          panelIcon={<DrawerArrowDownload20Filled />}
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
