import React from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from "recharts";




const data = [
    {
      name: "Jan",
      OLD: 4000,
      NEW: 2400,
      
    },
    {
        name: "Feb",
        OLD: 3400,
        NEW: 1800,
    },
    {
      name: "Mar",
      OLD: 2200,
      NEW: 1500,
    },
    {
      name: "Apr",
      OLD: 5500,
      NEW: 1200,
    },
    {
      name: "May",
      OLD: 6500,
      NEW: 2000,
    },
    {
      name: "June",
      OLD: 4500,
      NEW: 1950,
    },
    {
      name: "July",
      OLD: 3750,
      NEW: 2300,
    },
    {
        name: "Aug",
        OLD: 3950,
        NEW: 1200,
      },
      {
        name: "Sep",
        OLD: 2250,
        NEW: 500,
      },
      {
        name: "Oct",
        OLD: 3150,
        NEW: 1500,
      },
      {
        name: "Nov",
        OLD: 8050,
        NEW: 6200,
      },
      {
        name: "Dec",
        OLD: 12000,
        NEW: 5620,
      }
  ];

 function Visitorchart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
       <BarChart width={600} height={300} data={data} margin={{top: 20,right: 0,left: 0,bottom: 5}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="OLD" fill="red"  />
      <Bar dataKey="NEW" fill="blue"  />
     

    </BarChart>
   </ResponsiveContainer>
  );
}

export default Visitorchart;
