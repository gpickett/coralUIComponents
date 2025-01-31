import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Toolbar, ToggleButton } from "@fluentui/react-components";
import eventBus from "../eventbus.js";
const PanelRightToggles = ({ children }) => {
    const [activePanel, setActivePanel] = useState(null);
    const panelTypes = ["first", "second", "third", "fourth"];
    useEffect(() => {
        const handlePanelToggle = (panel) => {
            setActivePanel(panel);
        };
        // Listen for panel toggle events
        eventBus.on("setActivePanel", handlePanelToggle);
        // Default active panel
        eventBus.emit("setActivePanel", "first");
        return () => {
            eventBus.off("setActivePanel", handlePanelToggle);
        };
    }, []);
    const togglePanel = (panel) => {
        eventBus.emit("setActivePanel", activePanel === panel ? null : panel);
    };
    // Type guard to ensure child is a valid ToggleButton
    const isToggleButton = (child) => {
        return React.isValidElement(child) && child.type === ToggleButton;
    };
    return (_jsx(Toolbar, { style: { padding: "4px 0", display: "flex", flexDirection: "row-reverse" }, children: React.Children.map(children, (child, index) => {
            const panelType = panelTypes[index]; // Dynamically assign panelType based on index
            if (isToggleButton(child) && panelType) {
                return React.cloneElement(child, {
                    onClick: () => togglePanel(panelType),
                    checked: activePanel === panelType,
                });
            }
            return child; // Return child as is if it doesn't pass the type guard
        }) }));
};
export default PanelRightToggles;
