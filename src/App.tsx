import React, { useState } from "react";
import PanelLeft from "./components/Panels/PanelLeft.js";
import PanelRight from "./components/Panels/PanelRight.js";
import PanelLeftToolbar from "./components/Panels/PanelLeftToolbar.js";
import { Avatar, Button, ToggleButton, ToolbarButton, ToolbarDivider } from "@fluentui/react-components";
import { Add20Regular, Bookmark20Filled, Cube20Filled, DocumentSparkle20Filled, DrawerArrowDownload20Filled, MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
import "./index.css";
import Content from "./components/Content/Content.js";
import ContentToolbar from "./components/Content/ContentToolbar.js";
import { Bookmark, Cube, DocumentSparkle, DrawerArrowDownload, Search, Sparkle } from "./imports/bundleicons.js";
import PanelRightFourth from "./PanelRightFourth.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";
import PanelLeftSearch from "./modules/PanelLeftSearch.js";
import Dashboard from "./modules/Dashboard.js";  // <-- Import the dashboard


const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});

  return (

    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", backgroundColor: "var(--colorNeutralBackground3)" }}>

      {/* Header */}
      <Header subtitle="Coral">
        <HeaderTools>
          <Avatar />
          <ToolbarDivider />
          <PanelRightToggles>
            <ToggleButton appearance="subtle" icon={<Sparkle />} />
            <ToggleButton appearance="subtle" icon={<DocumentSparkle />} />
            <ToggleButton appearance="subtle" icon={<Bookmark />} />
            <ToggleButton appearance="subtle" icon={<DrawerArrowDownload />} />
          </PanelRightToggles>
          <ToolbarDivider />
          <ToolbarButton icon={<Cube />} />
          <ToolbarButton icon={<Cube />} />
        </HeaderTools>
      </Header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left Panel */}
        <div style={{ flexShrink: 0, display: "flex", overflow: "hidden" }}>
          <PanelLeftSearch selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>

        {/* Main Content with Dashboard */}
        <Content>
          <ContentToolbar
          // panelIcon={<Cube20Filled />}
          panelTitle="Dashboard">
            <Button appearance="subtle" icon={<Search />} /><ToolbarDivider />
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </ContentToolbar>

          {/* Dashboard View */}

          <div >
            <Dashboard selectedItems={selectedItems} />
          </div>


        </Content>

        {/* Right Panel */}
        <PanelRight panelWidth={450} panelResize={true} panelType="first">
          <PanelRightToolbar panelTitle="Copilot" panelIcon={<Sparkle20Filled />}>
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the first panel.</p>
          </div>
        </PanelRight>

        {/* Right Secondary Panel */}
        <PanelRight panelResize={true} panelType="second">
          <PanelRightToolbar panelTitle="Documents" panelIcon={<DocumentSparkle20Filled />}>
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the second panel.</p>
            <p>It swaps with the previous panel when toggled.</p>
          </div>
        </PanelRight>

        {/* Right Secondary Panel */}
        <PanelRight panelResize={true} panelType="third">
          <PanelRightToolbar panelTitle="Bookmarks" panelIcon={<Bookmark20Filled />}>
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the third panel.</p>
            <p>It swaps with the previous panel when toggled.</p>
          </div>
        </PanelRight>

        <PanelRightFourth />
      </div>
    </div>

  );
};

export default App;
