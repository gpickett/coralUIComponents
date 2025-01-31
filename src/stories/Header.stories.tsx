import React from "react";
import Header from "../components/Header/Header.js"; // Use the default export
import type { Meta, StoryFn } from "@storybook/react";



const meta: Meta<typeof Header> = {
    title: "Components/Header",
    component: Header,
  };
  
  export default meta;

export const Default = () => <Header />;
