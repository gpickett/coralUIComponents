import React from "react";
import PanelRight from "./coral.config/components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import { History20Filled, MoreHorizontalRegular } from "@fluentui/react-icons";
import PanelRightToolbar from "./coral.config/components/Panels/PanelRightToolbar.js";

const PanelRightFirst: React.FC = () => {
  return (
    <div>
      <PanelRight 
      panelWidth={450} // Defines entry width for right panel. Only needed on first panel.
      defaultClosed={true} // Is the panel closed or open on default? Only needed on first panel.
      panelResize={true} // Defines if the panel can be resized or not
      panelType="first" // Connected to PanelRightToggles in the header.

      >
        <PanelRightToolbar
        panelTitle="Chat History"
        panelIcon={<History20Filled />}>
          <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
        </PanelRightToolbar>
        <div style={{ padding: "0 16px 16px 16px" }}>
          <p>This is the content inside the first panel.</p>
        </div>
      </PanelRight>
    </div>
  );
};

export default PanelRightFirst;
