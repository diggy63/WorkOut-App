import React, {useState} from "react";
import { Button, Card, Form, Segment, Table } from "semantic-ui-react";
import './Excercise.css'

export default function Excercise({data, handleAdd, isAdd}){
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
        <>
        <Table.Row>
            <Table.Cell>{data.name}</Table.Cell>
            <Table.Cell>{onlyText} </Table.Cell>
            {isAdd ? <Table.Cell><Button secondary onClick={handleClick}>Add</Button></Table.Cell> : null}
          </Table.Row>
        </>
        )
    }