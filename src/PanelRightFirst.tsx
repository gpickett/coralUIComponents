import React from "react";
import PanelRight from "./components/Panels/PanelRight.js";
import { Button } from "@fluentui/react-components";
import { MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";

const PanelRightFirst: React.FC = () => {
  return (
    <div>
      <PanelRight 
      panelWidth={450} // Defines entry width for right panel
      panelResize={true} // Defines if the panel can be resized or not
      panelType="first" // Connected to PanelRightToggles in the header.
      >
        <PanelRightToolbar
        panelTitle="Copilot"
        panelIcon={<Sparkle20Filled />}>
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
