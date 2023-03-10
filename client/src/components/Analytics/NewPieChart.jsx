import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell,Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Milk', value: 300 },
  { name: 'Coffe', value: 200 },
  { name: 'Maize', value: 500 },
  { name: 'Wheat', value: 400 },
  { name: 'Potatoes', value: 150 },
  { name: 'Barley', value: 50 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function NewPieChart(){
 
    return (
      <div className='newpiechart'>
        <PieChart width={150} height={150} className="piechart" >
        
            <Pie
              data={data}
              cx={70}
              cy={70}
              innerRadius={40}
              outerRadius={60}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >


              {data.map((entry, index) => (
                <Cell
                
                
                key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
               <text x={70} y={75} dy={8} textAnchor="middle" fill="#000">
               % paid
              </text>
            <Tooltip/>
        
        </PieChart>
                {/* <p>hello</p> */}
      </div>
    );
}
