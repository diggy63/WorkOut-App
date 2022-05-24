import React from "react";
import { Grid, Button, Card } from "semantic-ui-react";


export default function WorkoutFrom({workout}){
    console.log(workout)
    return(

        <Grid.Column textAlign="center">
        <Card>
          <Card.Header>
          {workout.workoutName}
          </Card.Header>
          <Card.Content>
          {workout.description}
          </Card.Content>
        </Card>
        </Grid.Column>
    )
}