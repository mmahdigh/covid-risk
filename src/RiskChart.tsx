import React, { FC } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export const timeStampToDate = (timeStamp: number) => {
  const dt = new Date(timeStamp);
  return dt.toLocaleString().split(',')[0]
}

interface Props {
  risks: {time: string, risk: number}[]
}

export const RiskChart: FC<Props> = (props) => {
  // const props = {
  //   risks: 
  //     [{
  //       time: 1606078905916,
  //       risk: 0.47,
  //     }, {
  //       time: 1607194208000,
  //       risk: 0.35,
  //     }, {
  //       time: 1607883837000,
  //       risk: 0.22,
  //     }]
  // }


  return (
    <LineChart
        width={500}
        height={300}
        data={props.risks}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="risk" stroke="#8884d8" activeDot={{ r: 8 }} />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
  )
}