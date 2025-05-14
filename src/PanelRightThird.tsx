import React from "react";
import PanelRight from "./coral.config/components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import { Bookmark20Filled, MoreHorizontalRegular } from "@fluentui/react-icons";
import PanelRightToolbar from "./coral.config/components/Panels/PanelRightToolbar.js";

const PanelRightThird: React.FC = () => {
  return (
    <div>
      <PanelRight 
      panelResize={true} // Defines if the panel can be resized or not
      panelType="third" // Connected to PanelRightToggles in the header.
      >
        <PanelRightToolbar
          panelTitle="Bookmarks"
          panelIcon={<Bookmark20Filled />}
        >
          <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
        </PanelRightToolbar>
        <div style={{ padding: "0 16px 16px 16px" }}>
          <p>This is the content inside the third panel.</p>
          <p>It swaps with the previous panel when toggled.</p>
        </div>
      </PanelRight>
    </div>
  );
};

export default PanelRightThird;
