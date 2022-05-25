import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Grid, Card, Dimmer, Segment, Image, GridRow, Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import WorkoutShow from "../../components/WorkoutShow/WorkoutShow";
import * as workoutServices from "../../utils/workoutServices"

export default function Workouts({user, handleLogout}){
    const [ workout, setWorkout] = useState({})
    const para = useParams();
    useEffect(() => {
        findWorkout();
    },[])

    async function findWorkout(){
        const WO = await workoutServices.find(para.id)
        console.log(WO)
    }

    return(
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
            <h1>Workout</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
            <WorkoutShow />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1200 }}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}