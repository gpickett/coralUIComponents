import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import PanelLeft from "../components/Panels/PanelLeft.js";
import PanelLeftToolbar from "../components/Panels/PanelLeftToolbar.js";
import { ToolbarButton, Input, Button, Checkbox, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Body1 } from "@fluentui/react-components";
import { Dismiss, Search } from "../imports/bundleicons.js";
import { ChevronDown20Regular, ChevronRight20Regular, Filter20Regular } from "@fluentui/react-icons";
const PanelLeftSearch = ({ selectedItems, setSelectedItems }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef(null);
    const [collapsedSections, setCollapsedSections] = useState({
        MarineLife: true,
        Environment: true,
        Settings: true,
    });
    // Define categories and items
    const categorizedItems = {
        "Location": ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco"],
        "Age Range": ["0-18", "19-30", "31-45", "46-60", "60+"],
        "Calendar Range": ["Past 7 days", "Past 14 days", "Past 30 days", "Year to date", "All"],
    };
    // Transform into an array of items
    const items = Object.entries(categorizedItems).flatMap(([category, entries]) => entries.map((entry) => ({
        id: entry.toLowerCase().replace(/\s+/g, "_"),
        content: entry,
        searchableText: entry,
        category,
    })));
    // Filter items based on search query
    const filteredItems = items.filter((item) => item.searchableText.toLowerCase().includes(searchQuery.toLowerCase()));
    // Group items by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category])
            acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});
    // Auto-expand sections when search finds an item in that section
    useEffect(() => {
        setCollapsedSections((prev) => {
            const updatedSections = { ...prev };
            Object.keys(groupedItems).forEach((section) => {
                if (groupedItems[section].length > 0) {
                    updatedSections[section] = false;
                }
            });
            return updatedSections;
        });
    }, [searchQuery]);
    // Count checked items per section
    const checkedCounts = Object.keys(selectedItems).reduce((acc, id) => {
        const item = items.find((i) => i.id === id);
        if (item && selectedItems[id]) {
            acc[item.category] = (acc[item.category] || 0) + 1;
        }
        return acc;
    }, {});
    return (_jsxs(PanelLeft, { panelResize: true, panelWidth: 350, children: [_jsx(PanelLeftToolbar, { panelTitle: isSearching ? undefined : "Documents", children: !isSearching ? (_jsxs(_Fragment, { children: [_jsx(ToolbarButton, { icon: _jsx(Search, {}), onClick: () => {
                                setIsSearching(true);
                                setTimeout(() => inputRef.current?.focus(), 0);
                            } }), _jsxs(Menu, { positioning: { autoSize: true }, children: [_jsx(MenuTrigger, { disableButtonEnhancement: true, children: _jsx(ToolbarButton, { icon: _jsx(Filter20Regular, {}) }) }), _jsx(MenuPopover, { children: _jsx(MenuList, { children: _jsx(MenuItem, { onClick: () => setSelectedItems({}), children: "Clear selections" }) }) })] })] })) : (_jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexGrow: 1, width: "calc(100% + 8px)", margin: "0 -8px" }, children: _jsx(Input, { ref: inputRef, value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search...", appearance: "filled-lighter", contentAfter: _jsx(Button, { appearance: "transparent", icon: _jsx(Dismiss, {}), onClick: () => {
                                setIsSearching(false);
                                setSearchQuery(""); // Reset search input
                            }, "aria-label": "Clear search" }), onKeyDown: (e) => {
                            if (e.key === "Escape") {
                                setIsSearching(false);
                                setSearchQuery(""); // Reset search input
                            }
                        }, style: { flex: 1 } }) })) }), _jsx("div", { style: { padding: "0 8px 8px 8px" }, children: Object.entries(groupedItems).map(([category, items]) => (_jsxs("div", { children: [_jsxs(Body1, { style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                padding: "8px",
                                userSelect: "none",
                                color: "var(--colorNeutralForeground4)",
                            }, onClick: () => setCollapsedSections((prev) => ({ ...prev, [category]: !prev[category] })), children: [category, " (", checkedCounts[category] || 0, ")", _jsx("div", { style: { display: "flex", width: "32px", height: "32px", alignItems: "center", justifyContent: "center" }, children: collapsedSections[category] ? _jsx(ChevronRight20Regular, {}) : _jsx(ChevronDown20Regular, {}) })] }), !collapsedSections[category] && (_jsx("div", { children: items.map((item) => (_jsx("div", { style: { padding: "4px 0", userSelect: "none" }, children: _jsx(Checkbox, { label: item.content, checked: selectedItems[item.id] || false, onChange: () => setSelectedItems((prev) => ({ ...prev, [item.id]: !prev[item.id] })) }) }, item.id))) }))] }, category))) })] }));
};
export default PanelLeftSearch;
