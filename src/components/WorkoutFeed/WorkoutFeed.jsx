
import React, { useState, useEffect} from "react"
import * as workoutServices from "../../utils/workoutServices"
import { Grid, Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function WorkoutFeed({workouts}){
    
    const works = workouts.map((data, i) => {
        //console.log(data)
        if(!data.userCompleted){ 
        return (
            <Card centered key={i}>
                <Card.Header as="h2">{data.workoutName}</Card.Header>
                <Card.Content>
                <Card.Description>{data.description}</Card.Description>
                </Card.Content>
                <Link to={`/workouts/${data._id}`} ><Button>See Details</Button></Link>
            </Card>
        );
        }
      });
    return(
        <>
        <Card.Group itemsPerRow={2} stackable>
        {works}
        </Card.Group>
        </>
    )
}