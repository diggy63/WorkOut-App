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

import AddToWorkout from "../../components/AddToWorkout/AddToWorkout";
import WorkoutFrom from "../../components/WorkoutFrom.jsx/WorkoutFrom";
import "./CreateWorkout.css"
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
          <Header className="fixed" user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="marginten" textAlign="center" style={{ maxWidth: 1000 }}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column className="marginten widebody" textAlign="center" style={{ maxWidth: 400 }}>
            <Segment>
          <h2>workout</h2>
          </Segment >
            <div className="fixed">
              <WorkoutFrom workout={wrkot} />
              </div>
              </Grid.Column>
              <Grid.Column className="marginten widebody" textAlign="center" style={{ maxWidth: 1000 }}>
            <Segment>
            <h2>excercises</h2>
            </Segment>
            <AddToWorkout exs={exs} changeSearch={changeSearch} handleAdd={handleAdd}/>
            </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
