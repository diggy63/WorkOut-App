import React, {useState} from "react";
import { Card, Grid, Button, Table } from "semantic-ui-react";
import ExcerciseTracking from "../ExcerciseTracking/ExcerciseTracking";
import { useNavigate } from "react-router-dom";
import "./styles.css"

export default function WorkoutTracking({ workout, changeWeight }) {
    const navigate = useNavigate()
    let disEx = []
    if(workout.excercises){
        disEx=workout.excercises
    }
    //setExs(workout.excercises)
  const dis = disEx.map((data,i) =>{
      return(
          <ExcerciseTracking key={i} changeWeight={changeWeight} data={data} />
      )
  })

  function handleTrack(e){
      navigate(`/workouts/donedetails/${workout._id}`)
  }
  return (
      <>
      <h2>{workout.workoutName}</h2>
      {workout.description}
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Workout name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Weight</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>{dis}</Table.Body>
  </Table>
  <Button onClick={handleTrack}>Track</Button>
    </>
  );
}
