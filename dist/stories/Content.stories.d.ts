import type { Meta } from "@storybook/react";
import Content from "../components/Content/Content";
/** ✅ Storybook-only args (avoids `Meta<typeof Content>` type issues) */
interface StorybookArgs {
    childrenSample: number;
}
/** ✅ Define `Meta<typeof Content>` separately from Storybook Args */
declare const meta: Meta<typeof Content>;
export default meta;
/** ✅ Create story using Storybook args */
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react/dist/types-a5624094").R, StorybookArgs>;
