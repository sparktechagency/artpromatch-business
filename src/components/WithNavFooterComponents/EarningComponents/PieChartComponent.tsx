'use client';

import { useState, type JSX } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  PieProps,
} from 'recharts';

// Extend the PieProps type to include missing properties
interface CustomPieProps extends PieProps {
  activeIndex?: number;
  activeShape?: (props: any) => JSX.Element;
}

const PieChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`PV ${value}`}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className="w-full h-[300px] md:h-[420px]">
      <h1 className="text-3xl font-bold">Earnings Overview</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            {...({
              activeIndex,
              activeShape: renderActiveShape,
              data,
              cx: '50%',
              cy: '50%',
              innerRadius: 60,
              outerRadius: 80,
              fill: '#816a6b',
              dataKey: 'value',
              onMouseEnter: onPieEnter,
            } as CustomPieProps)}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
