import React, { useState } from "react";
import { Card, CardContent, Form, Segment, Button } from "semantic-ui-react";

export default function ExcerciseTracking({ data }) {
  const [exstate, setExstate] = useState({ weight: 0 });

  function handleChange(e) {
    setExstate({ ...exstate, [e.target.name]: e.target.value });
  }

    async function handleSubmit(e) {

      console.log(data._id)
  }

  return (
    <Card>
      <Card.Header>{data.name}</Card.Header>
      <CardContent>
        Reps:{data.reps} Sets:{data.sets}
      </CardContent>
      <Card.Content>
        {data.weight}
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="number"
              name="weight"
              min="1"
              max="1000"
              placeholder="reps"
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
