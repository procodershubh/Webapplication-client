import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '1',
    LastMonth: 1200,
    ThisMonth: 2400,
    
  },
  {
    name: '2',
    LastMonth: 1400,
    ThisMonth: 2900,
  },
  {
    name: '3',
    LastMonth: 1000,
    ThisMonth: 2400,
  },
  
  {
    name: '4',
    LastMonth: 2200,
    ThisMonth: 6500,
  },
  {
    name: '5',
    LastMonth: 1600,
    ThisMonth: 2200,
  },
  {
    name: '6',
    LastMonth: 3000,
    ThisMonth: 4400,
  },
  {
    name: '7',
    LastMonth: 3400,
    ThisMonth: 1200,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/stacked-area-chart-forked-5yjhcs';

  render() {
    return (
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart width={500} height={200} data={data} margin={{top: 10,right: 0,left: 0,bottom: 0,}}>
          <CartesianGrid strokeDasharray="0 120" />
          <XAxis dataKey="name" />
          <YAxis tick={false} />
          <Tooltip />
          <Area type="monotone" dataKey="ThisMonth" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

          <Area type="monotone" dataKey="LastMonth" stackId="2" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
