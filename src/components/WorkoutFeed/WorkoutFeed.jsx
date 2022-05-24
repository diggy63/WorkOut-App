
import React, { useState, useEffect} from "react"
import * as workoutServices from "../../utils/workoutServices"
import { Grid, Button, Card } from "semantic-ui-react";

export default function WorkoutFeed(){
    const [workouts, setWorkouts] = useState([])
    useEffect(() =>{
        getAll()
    },[])
    console.log(workouts, "workout page")
    async function getAll(){
        const allWO = await workoutServices.getAll()
        //console.log(allWO.workout, 'in workouts')
        setWorkouts(allWO.workout)
    }
    const works = workouts.map((data, i) => {
        return (
            <Card centered key={i}>
                <Card.Header>{data.workoutName}</Card.Header>
                <Card.Content>
                <Card.Description>{data.description}</Card.Description>
                </Card.Content>
            </Card>
        );
      });
    return(
        <>
        <h1>Workouts Here</h1>
        
        {works}
        </>
    )
}