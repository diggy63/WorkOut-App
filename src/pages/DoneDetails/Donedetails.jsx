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
    const [allWorkoutsD, setAllWorkoutsDone] = useState([])
    const [dEX, setEX] = useState([]);
    const [stats, setStats] = useState({})
    const [statWO, setStatWO] =useState({})
    const para = useParams();
    //console.log(para)
    async function findWO(){
        const WO = await Workoutservice.find(para)
        //console.log(WO, "workout")
        setDWO(WO.workout)
        
        
    }
    async function findAllWO(){
        const allWO = await Workoutservice.findAllOfOne(para)
        //console.log(allWO, "allWorkouts")
        setAllWorkoutsDone(allWO.workout)
        findStats(allWO)
        
        
    }
    useEffect(() =>{
        findWO()
        findAllWO()
    },[])

    async function findStats(WO){
        const finding = []
        WO.workout.forEach((item,i) => {
            item.excercises.forEach((innerItem,i) =>{
                //console.log(innerItem)
            })
        })
    }




    return(
        <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
            <Card centered>
          <h1>Workout Details</h1>
          
          <WorkoutDoneDetail WO={dWO} />
          </Card>
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 400 }}>
            <Segment className="flexcenter">
                <h1>Stats</h1>
            <h4>Workouts Done:{allWorkoutsD.length}</h4>
            </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}