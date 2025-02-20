import React, { useState, useRef, useEffect } from "react";
import PanelLeft from "../components/Panels/PanelLeft.js";
import PanelLeftToolbar from "../components/Panels/PanelLeftToolbar.js";
import { ToolbarButton, Input, Button, Checkbox, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem, Body1 } from "@fluentui/react-components";
import { Dismiss, Search } from "../imports/bundleicons.js";
import { ChevronDown20Regular, ChevronRight20Regular, Filter20Regular } from "@fluentui/react-icons";

interface SearchItem {
    content: React.ReactNode;
    searchableText: string;
    category: string;
    id: string;
}

interface PanelLeftSearchProps {
    selectedItems: Record<string, boolean>;
    setSelectedItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const PanelLeftSearch: React.FC<PanelLeftSearchProps> = ({ selectedItems, setSelectedItems }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
        MarineLife: true,
        Environment: true,
        Settings: true,
    });

    // Define categories and items
    const categorizedItems: Record<string, string[]> = {
        "Location": ["New York", "Los Angeles", "Chicago", "Houston", "San Francisco"],
        "Age Range": ["0-18", "19-30", "31-45", "46-60", "60+"],
        "Calendar Range": ["Past 7 days", "Past 14 days", "Past 30 days", "Year to date", "All"],
    };
    

    // Transform into an array of items
    const items: SearchItem[] = Object.entries(categorizedItems).flatMap(([category, entries]) =>
        entries.map((entry) => ({
            id: entry.toLowerCase().replace(/\s+/g, "_"),
            content: entry,
            searchableText: entry,
            category,
        }))
    );

    // Filter items based on search query
    const filteredItems = items.filter((item) =>
        item.searchableText.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Group items by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, SearchItem[]>);

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
    const checkedCounts: Record<string, number> = Object.keys(selectedItems).reduce((acc, id) => {
        const item = items.find((i) => i.id === id);
        if (item && selectedItems[id]) {
            acc[item.category] = (acc[item.category] || 0) + 1;
        }
        return acc;
    }, {} as Record<string, number>);

    return (
        <PanelLeft panelResize={true} panelWidth={350}>
            <PanelLeftToolbar panelTitle={isSearching ? undefined : "Documents"}>
                {!isSearching ? (
                    <>
                        <ToolbarButton
                            icon={<Search />}
                            onClick={() => {
                                setIsSearching(true);
                                setTimeout(() => inputRef.current?.focus(), 0);
                            }}
                        />
                        <Menu positioning={{ autoSize: true }}>
                            <MenuTrigger disableButtonEnhancement>
                                <ToolbarButton icon={<Filter20Regular />} />
                            </MenuTrigger>
                            <MenuPopover>
                                <MenuList>
                                    <MenuItem onClick={() => setSelectedItems({})}>Clear selections</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                    </>
                ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexGrow: 1, width: "calc(100% + 8px)", margin: "0 -8px" }}>
                        <Input
                            ref={inputRef}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search..."
                            appearance="filled-lighter"
                            contentAfter={
                                <Button
                                    appearance="transparent"
                                    icon={<Dismiss />}
                                    onClick={() => {
                                        setIsSearching(false);
                                        setSearchQuery(""); // Reset search input
                                    }}
                                    aria-label="Clear search"
                                />
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Escape") {
                                    setIsSearching(false);
                                    setSearchQuery(""); // Reset search input
                                }
                            }}
                            style={{ flex: 1 }}
                        />
                    </div>
                )}
            </PanelLeftToolbar>

            <div style={{ padding: "0 8px 8px 8px" }}>
                {Object.entries(groupedItems).map(([category, items]) => (
                    <div key={category}>
                        <Body1
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                                padding: "8px",
                                userSelect: "none",
                                color: "var(--colorNeutralForeground4)",
                            }}
                            onClick={() => setCollapsedSections((prev) => ({ ...prev, [category]: !prev[category] }))}
                        >
                            {category} ({checkedCounts[category] || 0})
                            <div style={{ display: "flex", width: "32px", height: "32px", alignItems: "center", justifyContent: "center" }}>
                                {collapsedSections[category] ? <ChevronRight20Regular /> : <ChevronDown20Regular />}
                            </div>
                        </Body1>

                        {!collapsedSections[category] && (
                            <div>
                                {items.map((item) => (
                                    <div key={item.id} style={{ padding: "4px 0", userSelect: "none" }}>
                                        <Checkbox
                                            label={item.content as string}
                                            checked={selectedItems[item.id] || false}
                                            onChange={() => setSelectedItems((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </PanelLeft>
    );
};

export default PanelLeftSearch;
