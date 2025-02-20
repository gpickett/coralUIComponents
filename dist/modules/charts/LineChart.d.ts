import React from "react";
interface ChartProps {
    data: {
        label: string;
        value: number;
    }[];
    width: number;
    height: number;
}
declare const LineChart: React.FC<ChartProps>;
export default LineChart;
