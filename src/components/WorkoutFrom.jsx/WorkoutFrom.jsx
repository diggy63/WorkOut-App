import React, {useState, useEffect} from "react";
import { Grid, Button, Card } from "semantic-ui-react";


export default function WorkoutFrom({workout}){
  const [exs, setExs] = useState([]);

  useEffect(() =>{
    if(workout.excercises){
    setExs(workout.excercises)
    }
  },[workout])
    


    const mapEx =  exs.map((data, i) => {
      //console.log(data)
      return (
          <Card centered key={i}>
              <Card.Header>{data.name}</Card.Header>
              <Card.Content>{data.bodyPart}</Card.Content>
              <Card.Content>
              <Card.Description>{data.description}</Card.Description>
              </Card.Content>

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