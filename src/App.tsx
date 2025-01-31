import React from "react";
import PanelLeft from "./components/Panels/PanelLeft.js";
import PanelRight from "./components/Panels/PanelRight.js";
import PanelLeftToolbar from "./components/Panels/PanelLeftToolbar.js";
import { Avatar, Button, Input, ToggleButton, ToolbarButton, ToolbarDivider } from "@fluentui/react-components";
import { Add20Regular, Bookmark20Filled, Cube20Filled, DocumentSparkle20Filled, DrawerArrowDownload20Filled, MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
import "./index.css"
import Content from "./components/Content/Content.js";
import ContentToolbar from "./components/Content/ContentToolbar.js";
import { Bookmark, Cube, DocumentSparkle, DrawerArrowDownload, Search, Sparkle } from "./imports/bundleicons.js";
import PanelRightFourth from "./PanelRightFourth.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";


const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden", backgroundColor: "var(--colorNeutralBackground3)" }}>
      {/* Header */}
      <Header >

        <HeaderTools>
          <Avatar />
          <ToolbarDivider />
          <PanelRightToggles>
            <ToggleButton
              appearance="subtle"
              icon={<Sparkle />}

            />
            <ToggleButton
              appearance="subtle"
              icon={<DocumentSparkle />}
 
            />
            <ToggleButton
              appearance="subtle"
              icon={<Bookmark />}
 
            />
            <ToggleButton
              appearance="subtle"
              icon={<DrawerArrowDownload />}
  
            />
          </PanelRightToggles>
          <ToolbarDivider />
          <ToolbarButton icon={<Cube />} />
          <ToolbarButton icon={<Cube />} />


        </HeaderTools>


      </Header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left Panel */}
        <div style={{ flexShrink: 0, display: "flex", overflow: "hidden" }}>


          <PanelLeft
            panelWidth={320}
            panelResize={true}>

            <PanelLeftToolbar
              panelIcon={null}
              panelTitle="Panel Left">

              <ToolbarButton
                icon={<Add20Regular />} />
              <ToolbarButton
                icon={<MoreHorizontalRegular />} />

            </PanelLeftToolbar>

            <div style={{ padding: "0 16px 16px 16px" }}>
              <p>This is the content inside the left panel.</p>
            </div>

          </PanelLeft>



        </div>

        {/* Main Content */}
        <div style={{ flex: 1, overflow: "auto" }}>
          <Content>
            <ContentToolbar
              panelIcon={<Cube20Filled />}
              panelTitle="Hello"
            >
              <Button appearance="subtle" icon={<Search />} /><ToolbarDivider />
              <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
            </ContentToolbar>
            <div style={{ padding: "0 16px 16px 16px" }}>
              <p>This is the content inside the content panel.</p>
            </div>
          </Content>
        </div>

        {/* Right Panel */}
        <PanelRight panelWidth={450} panelResize={true} panelType="first">
          <PanelRightToolbar
            panelTitle="Copilot"
            panelIcon={<Sparkle20Filled />}
          >
            {/* Additional toolbar actions */}
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />

          </PanelRightToolbar>
          {/* First Panel Content */}
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the first panel.</p>
          </div>
        </PanelRight>

        {/* Right Secondary Panel */}
        <PanelRight panelResize={true} panelType="second">
          <PanelRightToolbar
            panelTitle="Documents"
            panelIcon={<DocumentSparkle20Filled />}
          // panelType="second" // Explicitly set
          >
            {/* Additional toolbar actions */}
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>

          {/* Second Panel Content */}
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the second panel.</p>
            <p>It swaps with the previous panel when toggled.</p>
          </div>
        </PanelRight>



        {/* Right Secondary Panel */}
        <PanelRight panelResize={true} panelType="third">
          <PanelRightToolbar
            panelTitle="Bookmarks"
            panelIcon={<Bookmark20Filled />}
          // panelType="second" // Explicitly set
          >
            {/* Additional toolbar actions */}
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>

          {/* Third Panel Content */}
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
