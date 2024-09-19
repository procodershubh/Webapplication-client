import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    amt: 500,
  },
  {
    name: 'FEB',
    
    amt: 750,
  },
  {
    name: 'MAR',
    amt: 800,
  },
  {
    name: 'Apr',
    amt: 1200,
  },
  {
    name: 'MAY',
    amt: 900,
  },
  {
    name: 'JUNE',
    
    amt: 300,
  },
  {
    name: 'JULY',
    amt: 1050,
  },
  {
    name: 'AUG',
    amt: 350,
  },
  {
    name: 'SEP',
    amt: 688  ,
  },
  {
    name: 'OCT',
    amt: 1060,
  },
  {
    name: 'NOV',
    amt: 1650,
  },
  {
    name: 'DEC',
    amt: 1900,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={100}height={500}data={data}margin={{top: 5,right: 30,left: 20, bottom: 5,}}><CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amt" stroke="#8884d8" activeDot={{ r: 8}} />
          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
