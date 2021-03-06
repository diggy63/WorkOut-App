import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment, TextArea } from 'semantic-ui-react'
import * as workoutService from "../../utils/workoutServices"
import "./WorkoutDBCreate.css"

export default function WorkoutDBCreate(){
    const navigate = useNavigate();
    const [workout, setWorkout] = useState({
        workoutName: '',
        description: '',
    })
    async function handleSubmit(e){
      console.log("click")
        e.preventDefault();
        const newWO = await workoutService.createWO(workout);
        //console.log(newWO.workout._id)
        navigate(`/workouts/create/${newWO.workout._id}`)
    }

    function handleChange(e){
        setWorkout({...workout,
        [e.target.name]:e.target.value})
    }
    return(
        <Grid className="flexcenter" textAlign="center" style={{ height: "25vh" }} verticalAlign="middle">
        <div className="flexcenter">
          <Segment className="flexcenter">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Header.Content>Name Your Workout</Header.Content>
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
              name="workoutName"
              placeholder="Workout Name"
              value={workout.WorkoutName}
              onChange={handleChange}
              required
            />
            <TextArea
              type="text"
              name="description"
              placeholder="Description"
              value={workout.description}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Create Workout
            </Button>
          {/* {error ? <ErrorMessage error={error} /> : null} */}
        </Form>
      </Grid.Column>
      </Segment>
      </div>
    </Grid>
    )
}