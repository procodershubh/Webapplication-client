import React from "react";
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";




const data = [
    {
      name: "Jan",
      Imp: 4000,
      Sale: 2400,
      
    },
    {
        name: "Feb",
        Imp: 3000,
        Sale: 1400,
    },
    {
      name: "Mar",
      Imp: 3800,
      Sale: 2340,
    },
    {
      name: "Apr",
      Imp: 2050,
      Sale: 1020,
    },
    {
      name: "May",
      Imp: 4800,
      Sale: 3990,
    },
    {
      name: "June",
      Imp: 4100,
      Sale: 2120,
    },
    {
      name: "July",
      Imp: 5400,
      Sale: 4200,
    },
    {
        name: "Aug",
        Imp: 3800,
        Sale: 2100,
      },
      {
        name: "Sep",
        Imp: 7700,
      Sale: 6400,
      },
      {
        name: "Oct",
        Imp: 4800,
      Sale: 2200,
      },
      {
        name: "Nov",
        Imp: 5600,
      Sale: 5400,
      },
      {
        name: "Dec",
        Imp: 8900,
      Sale: 7800,
      }
  ];

 function Visitorchart() {
  return (
    <div className="text-white bg-white">
       <BarChart width={600} height={450} data={data} margin={{top: 20,right: 0,left: 10,bottom: 5}}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Imp" fill="red"  />
      <Bar dataKey="Sale" fill="blue"  />
    </BarChart>
    </div>
  );
}

export default Visitorchart;
