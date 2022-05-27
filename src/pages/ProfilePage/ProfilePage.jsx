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
    Container,
    Table,
  } from "semantic-ui-react";
import Header from "../../components/Header/Header"
import * as likesAPI from "../../utils/likeApi"
import LikedWorkouts from '../../components/LikedWorkouts/LikedWorkouts'
import * as WorkoutService from "../../utils/workoutServices"
import {useNavigate } from "react-router-dom";
import DoneWorkouts from "../../components/DoneWorkouts/DoneWorkouts"
import "./ProfilePage.css"






export default function ProfilePage({user, handleLogout}){
    const navigate = useNavigate()
    const [liked, setLiked] = useState([])
    const [done, setDone] = useState([])
    async function findLiked(){
        const WOLiked = await likesAPI.findLikedWorkouts()
        setLiked(WOLiked.workouts)
    }
    async function findDone(){
        const WODone = await WorkoutService.findDoneWorkouts()
        //console.log(WODone, "WODONE")
        setDone(WODone.workout)
        

    }

    useEffect(()=>{
        findLiked();
        findDone();
    },[])
    //console.log(done, "done in profile page")

    async function createNewWorkout(WOID){
        const newWO = await WorkoutService.makeNewTrack(WOID)
        console.log(newWO.workout._id)
        //console.log(WOID, "profile")
       navigate(`/workouts/track/${newWO.workout._id}`)
    }

    return(
        <>
        <Grid centered columns='equal' className="backg">
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="redish">
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
            <Segment>
          <h1>Your Workouts</h1>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        {/* <Card.Group itemsPerRow={2} stackable> */}
          <Grid.Column textAlign="center" style={{ maxWidth: 800 }}>
              <Segment inverted color='grey'>
          <h2>Tracked</h2>
          </Segment>
          <DoneWorkouts done={done} />
          </Grid.Column>
          <Grid.Column textAlign="center" style={{ maxWidth: 800 }}>
              <Segment inverted color='grey'>
            <h2>Liked Workouts</h2>
            </Segment>
            <LikedWorkouts liked={liked} track={createNewWorkout} />
          </Grid.Column>
        {/* </Card.Group> */}
      </Grid.Row>
    </Grid>
    </>
    )
}