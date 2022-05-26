import React, { useEffect, useState } from "react";
import { Card, CardContent, Form, Segment, Button } from "semantic-ui-react";
import * as WorkoutServices from "../../utils/workoutServices"

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
    <Card>
      <Card.Header>{data.name}</Card.Header>
      <CardContent>
        Reps:{data.reps} Sets:{data.sets}
      </CardContent>
      <Card.Content>
        Weight:{data.weight}
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              type="number"
              name="weight"
              min="1"
              max="1000"
              placeholder="Set Weight"
              value={exstate.weight}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Set
            </Button>
          </Segment>
        </Form>
      </Card.Content>
    </Card>
  );
}
