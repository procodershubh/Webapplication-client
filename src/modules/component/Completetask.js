import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    Data: 1121,
  },
  {
    name: 'Feb',
    Data: 1521,

  },
  {
    name: 'Mar',
    Data: 1321,

  },
  {
    name: 'Apr',
    Data: 1921,
  },
  {
    name: 'May',
    Data: 3921,
  },
  {
    name: 'Jun',
    Data: 1210,
  },
  {
    name: 'Jul',
    Data: 1621,
  },
  {
    name: 'Aug',
    Data: 1921,
  },
  {
    name: 'Sep',
    Data: 1421,
  },
  {
    name: 'Oct',
    Data: 4121,
  },
  {
    name: 'Nov',
    Data: 2021,
  },
  {
    name: 'Dec',
    Data: 3200,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Data" stroke="#8884d8" activeDot={{ r: 10 }} />
        
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
