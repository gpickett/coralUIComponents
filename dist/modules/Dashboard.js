import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Body1, Body1Strong, Button, Title2, ToggleButton, ToolbarButton } from "@fluentui/react-components";
import { Star20Regular } from "@fluentui/react-icons";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from "recharts";
import { MoreHorizontal, Star } from "../imports/bundleicons";
const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || payload.length === 0)
        return null;
    return (_jsxs("div", { style: {
            backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
            backdropFilter: "saturate(180%) blur(16px)",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid var(--colorNeutralStroke1)",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            color: "var(--colorNeutralForeground1)"
        }, children: [_jsx(Body1, { style: { fontWeight: "400", marginBottom: "12px", color: "white" }, children: label }), payload.map((entry, index) => (_jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [_jsx("span", { style: {
                            width: "10px",
                            height: "10px",
                            backgroundColor: entry.color,
                            borderRadius: "50%",
                            display: "inline-block"
                        } }), _jsxs("p", { style: { color: "white", margin: 0 }, children: [entry.name, ": ", _jsx("strong", { children: entry.value })] })] }, index)))] }));
};
const Dashboard = ({ selectedItems }) => {
    // Helper function to determine if an item is selected
    const isSelected = (id, category) => {
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
    const dashboardStyle = {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto auto",
        gap: "16px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        minHeight: "512px",
    };
    const secondRowStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        minHeight: "384px",
    };
    const chartStyle = {
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
    return (_jsxs("div", { style: {
            width: "100%",
            padding: "0px 16px 16px 16px",
            boxSizing: 'border-box'
        }, children: [_jsx("div", { style: dashboardStyle, children: _jsxs("div", { style: { ...chartStyle, gridColumn: "span 2" }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Body1Strong, { children: "Population Growth Trends by Age" }), _jsxs("div", { children: [_jsx(ToggleButton, { appearance: "subtle", icon: _jsx(Star, {}) }), _jsx(Button, { appearance: "subtle", icon: _jsx(MoreHorizontal, {}) })] })] }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { margin: { top: 24, right: 24, left: -24, bottom: 0 }, data: populationGrowth, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--colorNeutralStroke2)" }), _jsx(XAxis, { dataKey: "year" }), _jsx(YAxis, {}), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Legend, {}), _jsx(Line, { type: "monotone", dataKey: "0-18", stroke: "var(--colorBrandForeground1)" }), _jsx(Line, { type: "monotone", dataKey: "19-30", stroke: "var(--colorPaletteLavenderForeground2)" }), _jsx(Line, { type: "monotone", dataKey: "31-45", stroke: "var(--colorPaletteSeafoamForeground2)" })] }) })] }) }), _jsxs("div", { style: secondRowStyle, children: [_jsxs("div", { style: chartStyle, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Body1Strong, { children: "Population Distribution by Age Group" }), _jsx("div", { children: _jsx(ToolbarButton, { icon: _jsx(Star20Regular, {}) }) })] }), _jsx("div", { style: { margin: '12px 0 12px 0' }, children: _jsx(Title2, { children: "Null" }) }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { margin: { top: 24, right: 24, left: -24, bottom: 0 }, data: ageDistribution, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--colorNeutralStroke2)" }), _jsx(XAxis, { dataKey: "ageGroup" }), _jsx(YAxis, {}), _jsx(Tooltip, { cursor: false, content: _jsx(CustomTooltip, {}) }), _jsx(Bar, { dataKey: "population", fill: "var(--colorBrandForeground1)", radius: 8 })] }) })] }), _jsxs("div", { style: chartStyle, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Body1Strong, { children: "Age Distribution Across Locations" }), _jsx("div", { children: _jsx(ToolbarButton, { icon: _jsx(Star20Regular, {}) }) })] }), _jsx("div", { style: { margin: '12px 0 12px 0' }, children: _jsx(Title2, { children: (() => {
                                        // Map of full location names to their short versions
                                        const locationShortNames = {
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
                                    })() }) }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { data: locationAgeData, stackOffset: "sign", margin: { top: 24, right: 24, left: -24, bottom: 0 }, children: [_jsx("defs", { children: _jsx("pattern", { id: "diagonalLines", patternUnits: "userSpaceOnUse", width: "8", height: "8", children: _jsx("path", { d: "M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4", stroke: "var(--colorPaletteLavenderForeground2)", strokeWidth: "1.2" }) }) }), _jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: "var(--colorNeutralStroke2)" }), _jsx(XAxis, { dataKey: "location" }), _jsx(YAxis, {}), _jsx(Tooltip, { cursor: false, content: _jsx(CustomTooltip, {}) }), _jsx(Legend, {}), _jsx(Bar, { dataKey: "0-18", stackId: "a", fill: "var(--colorBrandForeground1)", radius: 8 }), _jsx(Bar, { dataKey: "gap", stackId: "a", fill: "transparent" }), _jsx(Bar, { dataKey: "19-30", stackId: "a", fill: "var(--colorPaletteLavenderForeground2)", radius: 8 }), " ", _jsx(Bar, { dataKey: "gap", stackId: "a", fill: "transparent" }), _jsx(Bar, { dataKey: "31-45", stackId: "a", fill: "url(#diagonalLines)", radius: 8 })] }) })] })] })] }));
};
export default Dashboard;
