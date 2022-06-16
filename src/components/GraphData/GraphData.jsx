import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function graph({allWOD, currTrack}) {
  console.log(currTrack)
  const newData = []
    allWOD.forEach(item => {
      // console.log(item.excercises[0].name, item.excercises[0].weight)
        newData.push({"name":item.excercises[currTrack].name,"weight":item.excercises[currTrack].weight})
    })
    console.log(newData)
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
          <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  );
}
