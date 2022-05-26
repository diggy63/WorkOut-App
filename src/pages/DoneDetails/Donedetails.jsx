import React, { useEffect, useState } from "react";
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
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom";
import * as Workoutservice from "../../utils/workoutServices"
import WorkoutDoneDetail from "../../components/WorkoutDoneFull/WorkoutDoneFull"

export default function DoneDetails({user, handleLogout}){
    const [dWO, setDWO] = useState([]);
    const [dEX, setEX] = useState([]);
    const [statWO, setStatWO] =useState([])
    const para = useParams();
    console.log(para)
    async function findWO(){
        const WO = await Workoutservice.find(para)
        console.log(WO, "workout")
        setDWO(WO.workout)
        
        
    }
    async function findAllWO(){
        const allWO = await Workoutservice.findAllOfOne(para)
        console.log(allWO, "allWorkouts")
        
        
    }
    useEffect(() =>{
        findWO()
        findAllWO()
    },[])
    return(
        <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <h1>Workout Details</h1>
          <WorkoutDoneDetail WO={dWO} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}