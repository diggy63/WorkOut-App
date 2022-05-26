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
import * as likesAPI from "../../utils/likeApi"
import LikedWorkouts from '../../components/LikedWorkouts/LikedWorkouts'
import * as WorkoutService from "../../utils/workoutServices"
import {useNavigate } from "react-router-dom";





export default function ProfilePage({user, handleLogout}){
    const navigate = useNavigate()
    const [liked, setLiked] = useState([])
    async function findLiked(){
        const WOLiked = await likesAPI.findLikedWorkouts()
        setLiked(WOLiked.workouts)
    }
    useEffect(()=>{
        findLiked();
    },[])

    async function createNewWorkout(WOID){
        const newWO = await WorkoutService.makeNewTrack(WOID)
        console.log(newWO.workout._id)
        //console.log(WOID, "profile")
       navigate(`/workouts/track/${newWO.workout._id}`)
    }

    return(
        <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <h1>ProfilePage</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Card.Group itemsPerRow={2} stackable>
          <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
          <h2>Done</h2>
          </Grid.Column>
          <Grid.Column textAlign="center" style={{ maxWidth: 800}}>
            <h2>Liked Workouts</h2>
            <LikedWorkouts liked={liked} track={createNewWorkout} />
          </Grid.Column>
        </Card.Group>
      </Grid.Row>
    </Grid>
    )
}