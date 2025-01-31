import type { Meta, StoryFn } from "@storybook/react";
import { Body1Strong, Button, Tag } from "@fluentui/react-components";
import {
  Add20Regular,
  Calendar20Regular,
  Cube20Filled,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import Content from "../components/Content/Content";
import ContentToolbar from "../components/Content/ContentToolbar";

/** ✅ Storybook-only args (avoids `Meta<typeof Content>` type issues) */
interface StorybookArgs {
  childrenSample: number;
}

/** ✅ Define `Meta<typeof Content>` separately from Storybook Args */
const meta: Meta<typeof Content> = {
  title: "Components/Content",
  component: Content,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: { table: { disable: true } }, // ✅ Hides `children` from Storybook controls
  },
};

export default meta;

/** ✅ Define the story with Storybook-only args */
const Template: StoryFn<StorybookArgs> = (args) => {
  return (
    <div
      style={{
        backgroundColor: "var(--colorNeutralBackground3)",
        width: "100%",
        height: "100%",
        maxWidth: "1200px",
        boxSizing: "border-box",
      }}
    >
      <Content>
        <ContentToolbar panelIcon={<Cube20Filled />} panelTitle="Content">
          <Button appearance="subtle" icon={<Add20Regular />} />
          <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
        </ContentToolbar>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", padding: "16px" }}>
          {Array.from({ length: args.childrenSample }).map((_, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--colorNeutralStroke2)",
                backgroundColor: "var(--colorNeutralBackground1)",
                borderRadius: "6px",
                padding: "12px",
              }}
            >
              <div
                style={{
                  height: "128px",
                  width: "100%",
                  backgroundColor: "var(--colorNeutralBackground2)",
                  borderRadius: "8px 8px 0 0",
                }}
              ></div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                <Body1Strong>Card {index + 1}</Body1Strong>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--colorNeutralForeground3)" }}>
                  <Calendar20Regular /> Today
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--colorNeutralForeground3)" }}>
                  <Calendar20Regular /> 11:30am - 12:15pm
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                  <Tag size="small">Jellyfish</Tag>
                  <Tag size="small">Anemone</Tag>
                  <Tag size="small">Eel</Tag>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
};

/** ✅ Create story using Storybook args */
export const Default = Template.bind({});
Default.args = {
  childrenSample: 3, // ✅ Now correctly controlled by Storybook without interfering with `Content`
};
