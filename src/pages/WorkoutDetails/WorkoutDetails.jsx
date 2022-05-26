import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
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
import { Link, useParams } from "react-router-dom";
import WorkoutShow from "../../components/WorkoutShow/WorkoutShow";
import * as workoutServices from "../../utils/workoutServices";
import * as likesAPI from "../../utils/likeApi";
import "./WorkoutDetails.css"

export default function Workouts({ user, handleLogout }) {
  const [workout, setWorkout] = useState({});
  const para = useParams();
  useEffect(() => {
    findWorkout();
  }, []);

  async function findWorkout() {
    const WO = await workoutServices.find(para);
    //console.log(WO, "in workout details")
    setWorkout(WO.workout);
  }

  async function addLike(WOID){
      console.log(WOID)
    try {
        const data = await likesAPI.create(WOID)
        const WO = await workoutServices.find(para);
        setWorkout(WO.workout);
      } catch(err){
      console.log("error in addLike reactSide")
    }
  }

  async function removeLike(likeId){
    try {
      const data = await likesAPI.removeLike(likeId);
      const WO = await workoutServices.find(para);
      setWorkout(WO.workout);
    //   console.log(data, '<-  this is the response from the server when we remove a like')
    //   getProfile()
      
    } catch(err){
      console.log(err);
    }
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
          
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column textAlign="center" width={10}>
          <Segment centered>
          <WorkoutShow workout={workout} user={user} addLike={addLike} removeLike={removeLike} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
