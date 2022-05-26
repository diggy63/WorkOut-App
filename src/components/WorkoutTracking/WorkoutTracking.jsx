import React, {useState} from "react";
import { Card, Grid } from "semantic-ui-react";
import ExcerciseTracking from "../ExcerciseTracking/ExcerciseTracking";

export default function WorkoutTracking({ workout, exs }) {
    // const [exs, setExs] = useState([])
   //console.log(exs)
  const disEx = exs.map((data,i) =>{
      return(
          <ExcerciseTracking data={data} />
      )
  })
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card centered>
            <Card.Header as={"h2"}>{workout.workoutName}</Card.Header>
            <Card.Content>{workout.description}</Card.Content>
            <Card.Content>{disEx}</Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
