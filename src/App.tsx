import PanelLeft from "./components/Panels/PanelLeft.js";
import {
  Avatar,
  Button,
  ToggleButton,
  ToolbarDivider,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  Sparkle20Filled
} from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import "./index.css";
import Content from "./components/Content/Content.js";
import ContentToolbar from "./components/Content/ContentToolbar.js";
import {
  Bookmark,
  DocumentSparkle,
  DrawerArrowDownload,
  Search,
  Sparkle,
} from "./imports/bundleicons.js";
import PanelRightFourth from "./PanelRightFourth.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";
import PanelRightThird from "./PanelRightThird.js";
import PanelRightSecond from "./PanelRightSecond.js";
import PanelRightFirst from "./PanelRightFirst.js";
import PanelLeftToolbar from "./components/Panels/PanelLeftToolbar.js";
import Chat from "./modules/Chat.js";

const App: React.FC = () => {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--colorNeutralBackground3)",
      }}
    >
      {/* Header */}
      <Header
      title="Microsoft"
      subtitle="Coral"
      logo={null}
      >
        <HeaderTools>
          <Avatar />
          <ToolbarDivider />
          {/* Panel Right Toggles define different panels the user can surface in the header. If there is only one, feel free to remove unused toggles. */}
          <PanelRightToggles>
            <ToggleButton appearance="subtle" icon={<Sparkle />} />
            <ToggleButton appearance="subtle" icon={<DocumentSparkle />} />
            <ToggleButton appearance="subtle" icon={<Bookmark />} />
            <ToggleButton appearance="subtle" icon={<DrawerArrowDownload />} />
          </PanelRightToggles>
        </HeaderTools>
      </Header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Left Panel */}
        <div style={{ flexShrink: 0, display: "flex", overflow: "hidden" }}>
          <PanelLeft 
          panelWidth={280} // Defines the entry width for left panel
          panelResize={true} // Defines if the panel is resizable
          >
            <PanelLeftToolbar
            panelTitle='Panel Left' // Defines the Title for the left panel
            panelIcon={null} // Defines the icon for the Left Panel
             />
          </PanelLeft>
        </div>

        {/* Main Content with Dashboard */}
        <Content>
          <ContentToolbar
            // panelIcon={<Cube20Filled />}
            panelTitle="Copilot"
            panelIcon={<Sparkle20Filled/>}
          >
            <Button appearance="subtle" icon={<Search />} />
            <ToolbarDivider />
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </ContentToolbar>


          <Chat
            apiUrl="http://localhost:5000"// Ensure this is correct
            apiKey="" // API Key (only needed for OpenAI & Azure OpenAI)
            // deploymentName="my-deployment" // Only needed for Azure OpenAI & Foundry
            isAzureFoundry={false} // Flag for Azure AI Foundry
            userId="user123" // Unique user ID (for multi-turn memory)
          // onSaveMessage={saveChatHistory} // Callback to save chat history
          // onLoadHistory={loadChatHistory} // Callback to load chat history
          // onClearHistory={clearChatHistory} // Callback to clear chat history
          />

        </Content>

        <PanelRightFirst />

        <PanelRightSecond />

        <PanelRightThird />

        <PanelRightFourth />
      </div>
    </div>
  );
};

export default App;
