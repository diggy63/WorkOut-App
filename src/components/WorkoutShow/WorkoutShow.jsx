import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Form,
  Card,
  Header,
  Image,
  Segment,
  CardContent,
  Icon,
} from "semantic-ui-react";
import ExcerciseForm from "../ExcerciseForm/ExcerciseForm";
import ExcerciseInWorkout from "../ExcerciseInWorkout/ExcerciseInWorkout";
import * as WorkoutService from "../../utils/workoutServices"
import { useNavigate } from "react-router-dom";

export default function WorkoutShow({ workout, addLike, user, removeLike }) {
    const navigate = useNavigate()
  let exMap = "";
  if (workout.excercises) {
    exMap = workout.excercises.map((data, i) => {
      //console.log(data)
      return <ExcerciseInWorkout key={i} data={data} />;
    });
  }
  let likeIndex = -1;
  console.log(workout.likes, "likeIndex");
  if (workout.likes) {
    likeIndex = workout.likes.findIndex(
      (like) => like.username === user.username
    );
    console.log(likeIndex, "like id");
  }
  const likeColor = likeIndex > -1 ? "red" : "grey";

  function handleLike(e) {
    if(likeIndex > -1){
        console.log("remove")
        removeLike(workout.likes[likeIndex]._id)
    }else{
        addLike(workout._id)
        console.log("like")
    }
    //console.log(workout.likes[likeIndex]._id)
    //removeLike(workout.likes[likeIndex]._id)
    //addLike(workout._id)
  }
  function handleDelete(e){
      console.log("click")
      WorkoutService.deleteOne(workout._id)
      navigate('/')
  }
  return (
    <Grid>
    <Grid.Row>
    <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
      <Card centered>
        <Card.Header>
          <h2>{workout.workoutName}</h2>
          <Button onClick={handleDelete}>Delete</Button>
          <a>
            <Icon
              onClick={handleLike}
              name={"heart"}
              color={likeColor}
              size="large"
            />
            {/* {workout ? <h1>hey</h1> : null} */}
          </a>
        </Card.Header>
        <Card.Group itemsPerRow={1} stackable style={{ maxWidth: 1000 }}>
        {exMap}
        </Card.Group>
      </Card>
      
    </Grid.Column>
    </Grid.Row>
    </Grid>
  );
}