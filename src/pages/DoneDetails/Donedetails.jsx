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
import WorkoutDoneFull from "../../components/WorkoutDoneFull/WorkoutDoneFull"
import GraphData from "../../components/GraphData/GraphData"
import Stats from "../../components/Stats/Stats"

export default function DoneDetails({user, handleLogout}){
    const [dWO, setDWO] = useState([]);
    const [allWorkoutsD, setAllWorkoutsDone] = useState([])
    const [dEX, setEX] = useState(0);
    const [stats, setStats] = useState([])
    const [statName, setStatName] =useState([])
    const para = useParams();
    //console.log(para)
    async function findWO(){
        const WO = await Workoutservice.find(para)
        setDWO(WO.workout)
        
        
    }
    async function findAllWO(){
        const allWO = await Workoutservice.findAllOfOne(para)
        setAllWorkoutsDone(allWO.workout)
        findStats(allWO)
        
        
    }
    useEffect(() =>{
        findWO()
        findAllWO()
    },[])


    function WOToTrack(WorkoutID){
      setEX(WorkoutID)
    }

    //finds all the done simliar workouts
    async function findStats(WO){
        const exName = []
        const check = []
        await WO.workout[0].excercises.forEach((item,i) => {
          const nammer = item.name
          check[i] = 0
          exName[i] = item.name
        })
        await WO.workout.forEach((item,i) => {
            item.excercises.forEach((innerItem,i) =>{
                if(check[i]<innerItem.weight){
                  check[i] = innerItem.weight;
                }
            })
        })
        setStats(check)
        setStatName(exName)
    }

    const bestStats = stats.map((item,i) => {
      return(
        <>
        <div className="marginAllTen" key={i}>
          Best {statName[i]} lift : {item} <Button onClick={WOToTrack} value={i}>See Progress</Button>
        </div>
        </>
      )
    })

    return(
      <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
            
          
          <WorkoutDoneFull WO={dWO} />
        </Grid.Column>
        <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
          <Stats allWorkouts = {allWorkoutsD} stats={stats} statName={statName} WOToTrack={WOToTrack}/>
        </Grid.Column>
      </Grid.Row >
      <Grid.Row style={{ maxWidth: 1000 }}>
        <Grid.Column width={{maxwidth: 400}}>
          <Segment>
            <GraphData allWOD={allWorkoutsD} currTrack={dEX} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    )
}