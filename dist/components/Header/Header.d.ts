import React from "react";
type HeaderProps = {
    logo?: React.ReactNode;
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
};
declare const Header: React.FC<HeaderProps>;
export default Header;
