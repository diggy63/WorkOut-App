import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header";
import {
  Grid,
  Card,
  Dimmer,
  Segment,
  Image,
  GridRow,
  Button,
  Icon,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import * as WorkoutService from "../../utils/workoutServices"
import WorkoutTracking from "../../components/WorkoutTracking/WorkoutTracking";

export default function TrackWorkout({user, handleLogout}){
    const [workout, setWorkout] = useState([])
    const [exs, setExs] = useState([])
    const para = useParams()
    //console.log(para)
    async function findWO(){
        const WO = await WorkoutService.find(para)
        setWorkout(WO.workout)
    }
    async function changeWeight(EXInfo){
        const changeW = await WorkoutService.changeWeightDB(EXInfo)
        //console.log(changeW.workout)
       setExs(changeW.workout.excercises)
    }
    useEffect(()=>{
        findWO();
    },[exs])

    useEffect(() =>{

    })

    //console.log(workout)
    return (
        <Grid centered>
          <Grid.Row>
            <Grid.Column>
              <Header user={user} handleLogout={handleLogout} />
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
              <h1>Track New Workout</h1>
              <WorkoutTracking workout={workout} changeWeight={changeWeight}  />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
}