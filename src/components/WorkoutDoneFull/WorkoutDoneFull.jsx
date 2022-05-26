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

export default function WorkDone({WO}){
    let exMap
    console.log(WO.createdAt)
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
            <Card.Header as="h2">
                {WO.workoutName} {WO.createdAt}
            </Card.Header>
            {exMap}
        </Card>
    )
}