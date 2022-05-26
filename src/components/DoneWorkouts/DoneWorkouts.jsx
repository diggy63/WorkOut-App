import React, { useState, useEffect } from "react"
import { Card, Button } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom";
import "./DoneWorkouts.css"

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
            
            <Card centered key={i}>
             <Card.Header as="h2">
                 <div className="workname">{data.workoutName}</div>
             </Card.Header>
            <Button secondary onClick={() => handleClick(data._id)}>Details</Button>
            </Card>
        )
    })

    
    return(
        <>
        {WO}
        </>
    )
}