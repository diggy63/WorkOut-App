import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function graph({allWOD, currTrack}) {
  const newData = []
    allWOD.forEach(item => {
      // console.log(item.excercises[0].createdAt, item.excercises[0].weight)
        newData.push({"name":item.excercises[currTrack].name,"weight":item.excercises[currTrack].weight})
    })
  return (
    <ResponsiveContainer width='100%' height={400}>
        <LineChart
          width={500}
          height={300}
          data={newData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#14213d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  );
}
