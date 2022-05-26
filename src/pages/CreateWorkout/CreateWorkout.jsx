import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as workoutService from "../../utils/workoutServices"
import { useParams } from "react-router-dom";
import * as excerciseService from '../../utils/excerciseServices'
import {
  Grid,
  Card,
  Dimmer,
  Segment,
  Image,
  GridRow,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddToWorkout from "../../components/AddToWorkout/AddToWorkout";
import WorkoutFrom from "../../components/WorkoutFrom.jsx/WorkoutFrom";

export default function Workouts({ user, handleLogout, exs, changeSearch }) {
    const [wrkot, setWrkot] = useState([])
    const [excercise, setExcercise] = useState({})
    const [repSet, setRepSet] = useState({
      reps: 0,
      sets: 0
    })
    const workoutID = useParams();
    //console.log(workoutID, 'workoutId')

    async function findWO(WO){
        const workOut = await workoutService.find(WO);
        //console.log(workOut)
        setWrkot(workOut.workout);
        //console.log(wrkot, "check excercises")
    }

     async function handleAdd(data, repset){
        //console.log(data, "in handleAdd")
        //console.log("clickup")
        const excercis = await excerciseService.createOrFind(data)
        //console.log(excercise.workout, "changed")
        //console.log(excercise.workout, 'in the creatworkout component')
        setRepSet({reps:parseInt(repset.reps), sets:parseInt(repset.sets)})
        setExcercise(excercis.workout, repset);
        //console.log(repSet, '<-------workout in hand Add')
    }

    async function handleExToWo(){
      const addex = await workoutService.addExcercise(wrkot,excercise,repSet)
      setWrkot(addex.workout);
      console.log(addex.workout, "returned value")
    }

    useEffect(() =>{
        findWO(workoutID)
        //console.log(wrkot, "inEffect")
    },[])

    useEffect(() =>{
        handleExToWo()
    },[excercise])
    //console.log(wrkot, "workout Found")
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <h1>New Workout</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Card.Group itemsPerRow={2} stackable>
          <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
          <h2>workout</h2>
              <WorkoutFrom workout={wrkot} />
          </Grid.Column>
          <Grid.Column textAlign="center" style={{ maxWidth: 800}}>
            <h2>excercises</h2>
            <AddToWorkout exs={exs} changeSearch={changeSearch} handleAdd={handleAdd}/>
          </Grid.Column>
        </Card.Group>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
