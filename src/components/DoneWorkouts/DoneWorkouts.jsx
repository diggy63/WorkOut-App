import React, { useState, useEffect } from "react"
import { Card, Button } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom";

export default function Done({done}){
    const navigate = useNavigate()

    console.log(done, "in Done")
    //setExs(done)
    function handleClick(workoutid){
        navigate(`/workouts/donedetails/${workoutid}`)
        console.log("click")
    }


    const WO = done.map((data,i) =>{
        return(
            
            <Card key={i}>
             <Card.Header as="h2">
                 {data.workoutName}
             </Card.Header>
            <Button onClick={() => handleClick(data._id)}>Details</Button>
            </Card>
        )
    })

    
    return(
        <>
        {WO}
        </>
    )
}