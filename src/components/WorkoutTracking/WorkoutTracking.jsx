import React, {useState} from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import ExcerciseTracking from "../ExcerciseTracking/ExcerciseTracking";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export default function WorkoutTracking({ workout, changeWeight }) {
    const navigate = useNavigate()
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

  function handleTrack(e){
      console.log("click")
      navigate(`/workouts/donedetails/${workout._id}`)
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Card centered>
            <Card.Header as={"h2"}>{workout.workoutName}</Card.Header>
            <Card.Content>{workout.description}</Card.Content>
            <Card.Content>{dis}</Card.Content>
            <Button onClick={handleTrack}>Track</Button>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
