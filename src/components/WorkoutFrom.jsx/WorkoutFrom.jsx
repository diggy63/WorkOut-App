import React, {useState, useEffect} from "react";
import { Grid, Button, Form, Card, Header, Image, Segment } from "semantic-ui-react";
import ExcerciseForm from "../ExcerciseForm/ExcerciseForm";

export default function WorkoutFrom({workout}){
  const [exs, setExs] = useState([]);
  const [repset, setRepSet] = useState({
    reps: 0,
    sets: 0,
  })

  useEffect(() =>{
    if(workout.excercises){
    setExs(workout.excercises)
    }
  },[workout])
    
  function handleChange(e){
    console.log(e.target)
    setRepSet({...repset,
      [e.target.name]:e.target.value,
    })

  }


    const mapEx =  exs.map((data, i) => {
      //console.log(data)
      return (
          <Card centered key={i}>
            <ExcerciseForm data={data} />

          </Card>
      );
    })





    return(

        <Grid.Column textAlign="center">
        <Card>
          <Card.Header>
          {workout.workoutName}
          </Card.Header>
          <Card.Content>
          {workout.description}
          </Card.Content>
          <Card.Content>
            {mapEx}
          </Card.Content>
        </Card>
        </Grid.Column>
    )
}