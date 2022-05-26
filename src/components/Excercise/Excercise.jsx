import React, {useState} from "react";
import { Button, Card, Form, Segment, } from "semantic-ui-react";
import './Excercise.css'

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
        console.log("click")
        handleAdd(data, exstate);
    }

    return(
        <Card raised>
            <Card.Header>
                {data.name}
            </Card.Header>
        <Card.Content>
            <Card.Description className="none">{onlyText}</Card.Description>
        </Card.Content>
        <Card.Content>
        </Card.Content>
        <Button onClick={handleClick}>Add</Button>
        </Card>
        )
    }