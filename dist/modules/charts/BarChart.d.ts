import React from "react";
interface ChartProps {
    data: {
        label: string;
        value: number;
    }[];
    width: number;
    height: number;
}
declare const BarChart: React.FC<ChartProps>;
export default BarChart;
