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
import GraphData from "../../components/GraphData/GraphData"

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
    function WOToTrack(e){
      console.log(e.target.value)
      setEX(e.target.value)
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
        <div key={i}>
          Best {statName[i]} lift : {item}
        </div>
        <Button onClick={WOToTrack} value={i}>{i}</Button>
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
            <Card centered>
          <h1>Workout Details</h1>
          
          <WorkoutDoneDetail WO={dWO} />
          </Card>
        </Grid.Column>
        <Grid.Column style={{ maxWidth: 400 }}>
            <Segment className="flexcenter">
                <h1>Stats</h1>
            <h4>Workouts Done:{allWorkoutsD.length}</h4>
            {bestStats}
            </Segment>
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