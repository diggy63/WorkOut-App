import React, {useState} from "react";
import { Button, Card, Form, Segment, } from "semantic-ui-react";

export default function Excercise({data, handleAdd}){
    const[exstate, setExstate] = useState({
        reps: 0,
        sets: 0,
    })
    function handleChange(e){
        setExstate({...exstate,
        [e.target.name]:e.target.value,
        })
    }
    // const descrip = stringToD(data.description)
    function removeHTML(str){ 
        const tmp = document.createElement("div");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    };
    const onlyText = removeHTML(data.description); 
    data.description = onlyText
    function handleClick(e){
        handleAdd(data, exstate);
    }

    return(
        <Card raised>
            <Card.Header>
                {data.name}
            </Card.Header>
        <Card.Content>
            <Card.Description>{onlyText}</Card.Description>
        </Card.Content>
        <Card.Content>
        <Form autoComplete="off">
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
        </Card.Content>
        <Button onClick={handleClick}>Add</Button>
        </Card>
        )
    }