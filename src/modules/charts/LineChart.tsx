import React from "react";
import { scaleLinear, scaleBand } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";
import { curveMonotoneX } from "@visx/curve";

interface ChartProps {
    data: { label: string; value: number }[];
    width: number;
    height: number;
}

const LineChart: React.FC<ChartProps> = ({ data, width, height }) => {
    if (!data || data.length === 0 || width <= 40 || height <= 40) {
        return <div style={{ textAlign: "center", padding: "20px" }}>No data available</div>;
    }

    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const xScale = scaleBand<string>({
        range: [0, xMax],
        domain: data.map((d) => d.label),
        padding: 0.4,
    });

    const yScale = scaleLinear<number>({
        range: [yMax, 0],
        domain: [0, Math.max(10, ...data.map((d) => d.value))],
    });

    return (
        <svg width={width} height={height} style={{ background: "var(--colorNeutralBackground1)", borderRadius: "8px" }}>
            <Group left={margin.left} top={margin.top}>
                <LinePath
                    data={data}
                    x={(d) => (xScale(d.label) || 0) + xScale.bandwidth() / 2}
                    y={(d) => yScale(d.value) || 0}
                    stroke="#4F52B2"
                    strokeWidth={2}
                    curve={curveMonotoneX}
                />
                <AxisBottom top={yMax} scale={xScale} stroke="#ccc" />
                <AxisLeft scale={yScale} stroke="#ccc" />
            </Group>
        </svg>
    );
};

export default LineChart;
