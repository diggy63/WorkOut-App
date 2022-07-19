import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

export default function graph({allWOD, currTrack}) {
  const newData = []
    allWOD.forEach(item => {
        newData.push({
          "date":item.createdAt.slice(0,10),
          "weight":item.excercises[currTrack].weight,
          "liftname":item.excercises[currTrack].name})
        console.log(newData[0]['liftname'])
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
          <XAxis dataKey="date">
            <Label value={newData[0]['liftname']}/>
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="weight" stroke="#14213d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
  );
}
