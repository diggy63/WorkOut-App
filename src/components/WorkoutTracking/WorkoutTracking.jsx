import React, {useState} from "react";
import { Card, Grid } from "semantic-ui-react";
import ExcerciseTracking from "../ExcerciseTracking/ExcerciseTracking";

export default function WorkoutTracking({ workout, changeWeight }) {
    let disEx = []
    if(workout.excercises){
        disEx=workout.excercises
        console.log("found");
    }
    //setExs(workout.excercises)
  const dis = disEx.map((data,i) =>{
      return(
          <ExcerciseTracking key={i} changeWeight={changeWeight} data={data} />
      )
  })
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card centered>
            <Card.Header as={"h2"}>{workout.workoutName}</Card.Header>
            <Card.Content>{workout.description}</Card.Content>
            <Card.Content>{dis}</Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
