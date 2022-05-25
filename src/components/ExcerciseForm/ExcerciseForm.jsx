import React, {useState, useEffect} from "react";
import {Card, Form, Button, Segment} from "semantic-ui-react";
import * as WorkoutService from "../../utils/workoutServices"

export default function ExcerciseForm({data}){
    const[exstate, setExstate] = useState({
        reps: 0,
        sets: 0,
        id: data._id,
    })
    function handleChange(e){
        setExstate({...exstate,
        [e.target.name]:e.target.value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const changeRS = await WorkoutService.changRepSet(exstate)
        console.log(changeRS.excer)
        setExstate({reps:changeRS.excer.reps})
    }
    return(
        <>
        <Card.Header>{data.name}</Card.Header>
        <Card.Content>
        <Card.Description style={{ }}>{data.description}</Card.Description>
        </Card.Content>
        <Card.Content>Reps:{data.reps} Sets:{data.sets}</Card.Content>
        <Form autoComplete="off" onSubmit={handleSubmit}>
              <Segment stacked>
                Reps
            <Form.Input
            type="number"
              name="reps"
              min="1" 
              max="30"
              placeholder="reps"
              value={exstate.reps}
              onChange={handleChange}
              required
            />
            Sets
            <Form.Input
              type="number"
              name="sets"
              min="1" 
              max="30"
              placeholder="sets"
              value={exstate.sets}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Set
            </Button>
          </Segment>
          </Form>
        </>
    )
}




{/* <Card.Header>{data.name}</Card.Header>
              <Card.Content>{data.bodyPart}</Card.Content>
              <Card.Description>{data.description}</Card.Description>
              <Card.Content>Reps:{data.reps} Sets:{data.sets}</Card.Content>
              <Segment stacked>
                Reps
            <Form.Input
            type="number"
              name="reps"
              min="1" 
              max="30"
              placeholder="reps"
              value={repset.reps}
              onChange={handleChange}
              required
            />
            Sets
            <Form.Input
              type="number"
              name="sets"
              min="1" 
              max="30"
              placeholder="sets"
              value={repset.sets}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Set
            </Button>
          </Segment> */}