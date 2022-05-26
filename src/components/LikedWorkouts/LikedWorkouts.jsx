import React, { useState, useEffect } from "react"
import { Card,Button } from "semantic-ui-react"
import { Link } from "react-router-dom";
import "./LikedWorkouts.css"

export default function Liked({liked, track}){
   // console.log(liked,"liked")
    function handleClick(WOID){
        track(WOID)
    }

    const WO = liked.map((data,i) =>{
        return(
            <Card centered key={i}>
            <Card.Header as="h2">
                <div className="workname">{data.workoutName}</div>
            </Card.Header>
            <Button secondary onClick={() => {handleClick(data._id)}}>Track Workout</Button>
            {/* <Link to={`/workouts/track/${data._id}`}><Button>Track Workout</Button></Link> */}
             </Card>
        )
    })

    
    return(
        <>
            {WO}
            </>
    )
}