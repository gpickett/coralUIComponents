import CoralShellColumn from "./coral.config/components/Layout/CoralShellColumn";
import CoralShellRow from "./coral.config/components/Layout/CoralShellRow";
import PanelLeft from "./coral.config/components/Panels/PanelLeft.js";
import {
  Avatar,
  Button,
  ToggleButton,
  ToolbarDivider,
} from "@fluentui/react-components";
import {
  AppGeneric20Regular,
  Attach20Regular,
  MoreHorizontalRegular,
  Send20Regular,
  Sparkle20Filled,
} from "@fluentui/react-icons";
import Header from "./coral.config/components/Header/Header";
import "./index.css";
import Content from "./coral.config/components/Content/Content";
import ContentToolbar from "./coral.config/components/Content/ContentToolbar";
import {
  Bookmark,
  DocumentSparkle,
  DrawerArrowDownload,
  History,
  Search,
  Sparkle,
} from "./coral.config/imports/bundleicons";
import PanelRightFourth from "./PanelRightFourth";
import HeaderTools from "./coral.config/components/Header/HeaderTools";
import PanelRightToggles from "./coral.config/components/Header/PanelRightToggles";
import PanelRightThird from "./PanelRightThird";
import PanelRightSecond from "./PanelRightSecond";
import PanelRightFirst from "./PanelRightFirst";
import PanelLeftToolbar from "./coral.config/components/Panels/PanelLeftToolbar";
import Chat from "./coral.config/modules/Chat";

// Coral App Shell — Primary Layout
// This file defines the structural framework of the Coral interface.
// It wires together shared system components: header, panels, content shell, and modules.
// All interactive behaviors and data logic are delegated to encapsulated components.

const App: React.FC = () => {
  return (
    <CoralShellColumn>
      {/* HEADER */}
      {/* Global bar for identity, session tools, and feature toggles */}

      <Header
      title="Microsoft"
      subtitle="Coral"
      logo={null}>


      
        <HeaderTools>
          <Avatar />
          <ToolbarDivider />

          {/* Panel visibility toggles — linked to right side modules */}
          <PanelRightToggles>
            <ToggleButton appearance="subtle" icon={<History />} />
            <ToggleButton appearance="subtle" icon={<DocumentSparkle />} />
            <ToggleButton appearance="subtle" icon={<Bookmark />} />
            <ToggleButton appearance="subtle" icon={<DrawerArrowDownload />} />
          </PanelRightToggles>
        </HeaderTools>
      </Header>







      <CoralShellRow>
        {/* PANEL LEFT */}
        {/* Resizable navigation or filter rail */}
        <div style={{ flexShrink: 0, display: "flex", overflow: "hidden" }}>
          <PanelLeft
          panelWidth={280}
          panelResize={true}>
            <PanelLeftToolbar panelTitle="Panel Left" panelIcon={null} />
          </PanelLeft>
        </div>

        {/* MAIN CONTENT AREA */}
        {/* Dynamic workspace where tools, features, and modules are rendered */}
        <Content>
          <ContentToolbar panelTitle="Copilot" panelIcon={<Sparkle20Filled />}>
            <Button appearance="subtle" icon={<Search />} />
            <ToolbarDivider />
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </ContentToolbar>

          {/* Chat Module (LLM Interface) */}
          {/* This shell is frontend-only. All backend connections must be passed via props. */}


          <Chat
            placeholder="Ask me anything..."
            apiUrl="http://localhost:5000"
            apiKey=""
            isAzureFoundry={false}
            userId="user123"
          >
            <Button appearance="subtle" icon={<Attach20Regular />} />
            <Button appearance="subtle" icon={<AppGeneric20Regular />} />
          </Chat>





        </Content>

        {/* PANEL RIGHT STACK */}
        {/* These are modular extensions toggled from the header */}
        <PanelRightFirst />
        <PanelRightSecond />
        <PanelRightThird />
        <PanelRightFourth />
      </CoralShellRow>
    </CoralShellColumn>
  );
};

export default App;
