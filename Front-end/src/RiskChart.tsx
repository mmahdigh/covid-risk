import React, { FC } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Cell,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { useTheme } from 'react-jss';

export const timeStampToDate = (timeStamp: number) => {
  const dt = new Date(timeStamp);
  return dt.toLocaleString().split(',')[0]
}

interface Props {
  risks: {time: string, risk: number}[]
}
interface TriangleBarProps {
  fill?: string,
  x?: number,
  y?: number,
  width?: number,
  height?: number,
};

const colors = scaleOrdinal(schemeCategory10).range();


const getPath = (x: number, y: number,
 width: number, height: number) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar : FC<TriangleBarProps> = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x as any, y as any, width as any, height as any)} stroke="none" fill={fill} />;
};


export const RiskChart : FC<Props> = (props) => {

    const isMobile = window.innerWidth < 500
    return (
      <BarChart
        width={isMobile ? 380 : 450}
        height={300}
        data={props.risks}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Bar dataKey="risk" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {
            props.risks.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))
          }
        </Bar>
      </BarChart>
    );
}
