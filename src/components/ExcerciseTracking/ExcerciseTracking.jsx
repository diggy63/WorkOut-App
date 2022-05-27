import React, { useEffect, useState } from "react";
import { Card, CardContent, Form, Segment, Button, Table } from "semantic-ui-react";
import * as WorkoutServices from "../../utils/workoutServices"
import "./ExcerciseTracking.css"

export default function ExcerciseTracking({ data, changeWeight }) {
    const[exstate, setExstate] = useState({
        weight: 0,
        id: data._id,
    })
  function handleChange(e) {
    setExstate({ ...exstate, [e.target.name]: e.target.value });
  }


    async function handleSubmit(e) {
        console.log('click')
       changeWeight(exstate);
  }

  return (
      <>
    <Table.Row>
    <Table.Cell>{data.name}</Table.Cell>
    <Table.Cell>Reps:{data.reps} Sets:{data.sets} </Table.Cell>
    <Table.Cell> 
        <div className="flex">
        Weight:{data.weight}
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
                style={{ maxWidth: 200 }}
              type="number"
              name="weight"
              min="1"
              max="1000"
              placeholder="Set Weight"
              value={exstate.weight}
              onChange={handleChange}
              required
            />
            <div>
            <Button type="submit" className="btn">
              Set
            </Button>
            </div>
        </Form>
        </div>
        </Table.Cell>
  </Table.Row>
    </>
  );
}
