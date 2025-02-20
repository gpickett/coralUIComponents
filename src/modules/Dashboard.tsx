import { Body1, Body1Strong, Body2, Button, Dropdown, Subtitle1, Subtitle2, Tag, Title1, Title2, ToggleButton, ToolbarButton } from "@fluentui/react-components";
import { ArrowExport20Regular, Star20Regular } from "@fluentui/react-icons";
import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid, Legend
} from "recharts";
import { MoreHorizontal, Star } from "../imports/bundleicons";

interface DashboardProps {
    selectedItems: Record<string, boolean>;
}


const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
        <div style={{
            backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
            backdropFilter: "saturate(180%) blur(16px)",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid var(--colorNeutralStroke1)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            color: "var(--colorNeutralForeground1)"
        }}>
            <Body1 style={{ fontWeight: "400", marginBottom: "12px", color: "white" }}>{label}</Body1>
            {payload.map((entry: any, index: number) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* ✅ Small colored dot */}
                    <span style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: entry.color,
                        borderRadius: "50%",
                        display: "inline-block"
                    }} />
                    {/* ✅ White text */}
                    <p style={{ color: "white", margin: 0 }}>
                        {entry.name}: <strong>{entry.value}</strong>
                    </p>
                </div>
            ))}
        </div>
    );
};


const Dashboard: React.FC<DashboardProps> = ({ selectedItems }) => {
    // Helper function to determine if an item is selected
    const isSelected = (id: string, category: string[]) => {
        const hasSelection = category.some((item) => selectedItems[item]);
        return hasSelection ? selectedItems[id] ?? false : true; // Show all if none selected
    };

    // Mock Data
    const allAgeGroups = ["0-18", "19-30", "31-45", "46-60", "60+"];
    const allLocations = ["new_york", "los_angeles", "chicago", "houston", "san_francisco"];
    const allCalendarRanges = ["past_7_days", "past_14_days", "past_30_days", "year_to_date", "all"];

    const ageDistribution = [
        { ageGroup: "0-18", population: 500, id: "0-18" },
        { ageGroup: "19-30", population: 450, id: "19-30" },
        { ageGroup: "31-45", population: 350, id: "31-45" },
        { ageGroup: "46-60", population: 280, id: "46-60" },
        { ageGroup: "60+", population: 150, id: "60+" },
    ].filter(d => isSelected(d.id, allAgeGroups));

    const locationAgeData = [
        { location: "New York", "0-18": 100, "gap": 6, "19-30": 80, "31-45": 60, id: "new_york" },
        { location: "Los Angeles", "0-18": 90, "gap": 6, "19-30": 70, "31-45": 50, id: "los_angeles" },
        { location: "Chicago", "0-18": 70, "gap": 6, "19-30": 60, "31-45": 40, id: "chicago" },
        { location: "Houston", "0-18": 80, "gap": 6, "19-30": 75, "31-45": 55, id: "houston" },
        { location: "San Francisco", "0-18": 60, "gap": 6, "19-30": 50, "31-45": 30, id: "san_francisco" },
    ].filter(d => d.id === undefined || isSelected(d.id, allLocations));


    const populationGrowth = [
        { year: "2015", "0-18": 200, "19-30": 280, "31-45": 160, id: "past_7_days" },
        { year: "2016", "0-18": 240, "19-30": 190, "31-45": 250, id: "past_14_days" },
        { year: "2017", "0-18": 180, "19-30": 300, "31-45": 140, id: "past_30_days" },
        { year: "2018", "0-18": 310, "19-30": 230, "31-45": 220, id: "year_to_date" },
        { year: "2019", "0-18": 260, "19-30": 190, "31-45": 280, id: "all" },
    ].filter(d => isSelected(d.id, allCalendarRanges));


    // Styles
    const dashboardStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto",
        gap: "16px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        minHeight: "512px",

    };

    const secondRowStyle: React.CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // Two columns for bar charts
        gap: "16px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        minHeight: "384px",
    };

    const chartStyle: React.CSSProperties = {
        background: "var(--colorNeutralBackground2)",
        color: "var(--colorNeutralForeground2)",
        padding: "12px 16px 16px 16px",
        borderRadius: "8px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        maxWidth: "100%",

        border: "1px solid var(--colorNeutralStroke3)"
    };

    return (
        <div style={{
            width: "100%",
            padding: "0px 16px 16px 16px",

            boxSizing: 'border-box'
        }}>
            {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: ' 16px 16px 0 16px' }}>
                <Title2>
                    Dashboard
                </Title2>
                <Button icon={<ArrowExport20Regular />}>Export</Button>
            </div>
            <br />
            <div style={{ display: 'flex', gap: '8px', padding: '0 16px 16px 16px' }}>
                <Tag appearance="outline" shape="circular">Hello</Tag>
                <Tag appearance="outline" shape="circular">Hello</Tag>
                <Tag appearance="outline" shape="circular">Hello</Tag>
            </div> */}


            {/* First Row (1 Full-Width Line Chart) */}
            <div style={dashboardStyle}>
                {/* Population Growth Trends */}
                <div style={{ ...chartStyle, gridColumn: "span 2" }}>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Body1Strong>Population Growth Trends by Age</Body1Strong>
                        <div>
                        <ToggleButton appearance="subtle" icon={<Star />} />
                        <Button appearance="subtle" icon={<MoreHorizontal />} />

    
                        </div>
                        
                    </div>
                    <ResponsiveContainer width="100%" height="100%" >
                        <LineChart
                            margin={{ top: 24, right: 24, left: -24, bottom: 0 }} // Adjusted margins
                            data={populationGrowth} >
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--colorNeutralStroke2)" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Line type="monotone" dataKey="0-18" stroke="var(--colorBrandForeground1)" />
                            <Line type="monotone" dataKey="19-30" stroke="var(--colorPaletteLavenderForeground2)" />
                            <Line type="monotone" dataKey="31-45" stroke="var(--colorPaletteSeafoamForeground2)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Second Row (2 Bar Charts Side by Side) */}
            <div style={secondRowStyle}>
                {/* Population Distribution by Age */}
                <div style={chartStyle}>
 

                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Body1Strong>Population Distribution by Age Group</Body1Strong>
                        <div>
                        <ToolbarButton icon={<Star20Regular />} />
         
                        </div>
                        
                    </div>

                    <div style={{ margin: '12px 0 12px 0' }}><Title2>Null</Title2></div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            margin={{ top: 24, right: 24, left: -24, bottom: 0 }} // Adjusted margins
                            data={ageDistribution} >
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--colorNeutralStroke2)" />
                            <XAxis dataKey="ageGroup" />
                            <YAxis />
                            <Tooltip cursor={false} content={<CustomTooltip />} />
                            <Bar dataKey="population" fill="var(--colorBrandForeground1)" radius={8} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Age Distribution Across Locations (Stacked) */}
                <div style={chartStyle}>
 


                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                        <Body1Strong>Age Distribution Across Locations</Body1Strong>
                        <div>
                        <ToolbarButton icon={<Star20Regular />} />
         
                        </div>
                        
                    </div>
                    <div style={{ margin: '12px 0 12px 0' }}>
                        <Title2>
                            {(() => {
                                // Map of full location names to their short versions
                                const locationShortNames: Record<string, string> = {
                                    "new_york": "NY",
                                    "los_angeles": "LA",
                                    "chicago": "CHI",
                                    "houston": "HOU",
                                    "san_francisco": "SF"
                                };

                                // Get selected locations
                                const selectedLocations = allLocations
                                    .filter(loc => selectedItems[loc]) // Check if selected
                                    .map(loc => locationShortNames[loc]); // Convert to short form

                                // Display selected locations or "All"
                                return selectedLocations.length > 0 ? selectedLocations.join(" / ") : "All";

                            })()}
                        </Title2>
                    </div>

                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={locationAgeData}
                            stackOffset="sign"
                            margin={{ top: 24, right: 24, left: -24, bottom: 0 }} // Adjusted margins
                        >
                            <defs>
                                <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="8" height="8">
                                    <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                                        stroke="var(--colorPaletteLavenderForeground2)"
                                        strokeWidth="1.2" />
                                </pattern>
                            </defs>

                            <CartesianGrid strokeDasharray="3 3" stroke="var(--colorNeutralStroke2)" />
                            <XAxis dataKey="location" />
                            <YAxis />
                            <Tooltip cursor={false} content={<CustomTooltip />} />
                            <Legend />
                            <Bar dataKey="0-18" stackId="a" fill="var(--colorBrandForeground1)" radius={8} />
                            <Bar dataKey="gap" stackId="a" fill="transparent" />
                            <Bar dataKey="19-30" stackId="a" fill="var(--colorPaletteLavenderForeground2)" radius={8} /> {/* Diagonal pattern applied here */}
                            <Bar dataKey="gap" stackId="a" fill="transparent" />
                            <Bar dataKey="31-45" stackId="a" fill="url(#diagonalLines)" radius={8} />
                        </BarChart>

                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
