import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'INDIA',
    Product: 400,
  },
  {
    name: 'US',
    Product: 220,
  },
  {
    name: 'CHINA',
    Product: 130,
   
  },
  {
    name: 'UK',
    Product: 211,
  },
  {
    name: 'GER',
    Product: 260,
  },
  {
    name: 'AUS',
    Product: 620,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500}height={500} data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0,}} >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Product" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
