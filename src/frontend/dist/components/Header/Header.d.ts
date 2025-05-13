import React from "react";
/**
 * @component
 * @name Header
 * @description A header component for displaying a logo, title, and optional subtitle.
 *
 * @prop {React.ReactNode} [logo] - Custom logo (defaults to Microsoft icon).
 * @prop {string} [title="Microsoft"] - Main title text.
 * @prop {string} [subtitle] - Optional subtitle displayed next to the title.
 * @prop {React.ReactNode} [children] - Optional header toolbar (e.g., buttons, menus).
 */
type HeaderProps = {
    logo?: React.ReactNode;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
