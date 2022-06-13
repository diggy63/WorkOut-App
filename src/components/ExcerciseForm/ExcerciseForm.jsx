import React, {useState, useEffect} from "react";
import {Card, Form, Button, Segment} from "semantic-ui-react";
import * as WorkoutService from "../../utils/workoutServices";
import "./ExcerciseFrom.css"

export default function ExcerciseForm({data, handleRepSetChange}){
    const[exstate, setExstate] = useState({
        reps: 0,
        sets: 0,
        id: data._id,
    })

    useEffect(() =>{
      handleReload()
    },[])

    async function handleReload(){
      const changeRS = await WorkoutService.changRepSet(exstate)
      console.log(changeRS.workout)
      changeRS.workout.excercises.forEach(item =>{
        if(item._id === exstate.id)
        console.log(item.reps)
        setExstate({...exstate,
            reps:item.reps,
          sets:item.sets,})
        
      })
    }
    function handleChange(e){
        setExstate({...exstate,
        [e.target.name]:e.target.value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();
        const changeRS = await WorkoutService.changRepSet(exstate)
        //console.log(changeRS, "changerepset")
        handleRepSetChange(changeRS.workout)
    }

    async function upReps(e){
      setExstate({...exstate,
        [e.target.name]:parseInt([(e.target.value)])+1,
        })
        const changeRS = await WorkoutService.changRepSet(exstate)
        //console.log(changeRS, "changerepset")
        handleRepSetChange(changeRS.workout)
    }

    async function downReps(e){
      setExstate({...exstate,
        [e.target.name]:parseInt([(e.target.value)])-1,
        })
        const changeRS = await WorkoutService.changRepSet(exstate)
        //console.log(changeRS, "changerepset")
        handleRepSetChange(changeRS.workout)
    }
    return(
        <>
        <Card>
        <Card.Header as="h3"><div className="marginten">{data.name}</div></Card.Header>
        <Card.Content>Reps:{data.reps} Sets:{data.sets}</Card.Content>
        <Card.Content>
        <Button name="reps" value={exstate.reps} onClick={upReps}>+</Button><Button name="reps" value={exstate.reps} onClick={downReps}>-</Button>
        <Button name="sets" value={exstate.sets} onClick={upReps}>+</Button><Button name="sets" value={exstate.sets} onClick={downReps}>-</Button>
        </Card.Content>
          </Card>
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