import React, {useState, useEffect} from "react";
import { Grid, Button, Form, Card, Header, Image, Segment } from "semantic-ui-react";
import ExcerciseForm from "../ExcerciseForm/ExcerciseForm";
import "./WorkoutFrom.css"
import { useNavigate, Link } from "react-router-dom";

export default function WorkoutFrom({workout}){
  const [exs, setExs] = useState([]);
  const [repset, setRepSet] = useState({
    reps: 0,
    sets: 0,
  })
  const navigate = useNavigate()

  useEffect(() =>{
    if(workout.excercises){
    setExs(workout.excercises)
    }
  },[workout])
    
  function handleChange(e){
    //console.log(e.target)
    setRepSet({...repset,
      [e.target.name]:e.target.value,
    })

  }

  function handleRepSetChange(changedWorkout){
    //console.log(changedWorkout, 'changed workout')
    setExs(changedWorkout.excercises)
  }
    const mapEx =  exs.map((data, i) => {
      //console.log(data)
      return (
            <ExcerciseForm key={i} data={data} handleRepSetChange={handleRepSetChange}/>

      );
    })

    function handleClick(e){
      navigate(`/workouts/${workout._id}`)
    }




    return(
      <Segment inverted color="grey">
        <Card className="black">
          <Card.Header as="h2">
          {workout.workoutName}
          </Card.Header>
          <Card.Content>
          {workout.description}
          </Card.Content>
          <Card.Content>
            {mapEx}
          </Card.Content>
          <Button onClick={handleClick}>Done</Button>
        </Card>
        </Segment>
    )
}