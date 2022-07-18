import React from "react"
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
import "./WorkoutDoneFull.css"


export default function WorkDone({WO}){
    let exMap
    if(WO.excercises){  
    exMap = WO.excercises.map((data,i) =>{
        return(
            <>
            <Card.Content key={i} >
                {data.name} Rep:{data.reps}  Sets:{data.sets} Weight:{data.weight}
            </Card.Content>
            </>
        )
    })
    }
    return(
        <Card centered>
        <h1>Workout Details</h1>
            <Card.Header>
                <div className="flex">
                <h2>{WO.workoutName}</h2>
                
                {WO.createdAt ? WO.createdAt.slice(0,10):null}
                </div>
            </Card.Header>
            {exMap}
        </Card>
    )
}