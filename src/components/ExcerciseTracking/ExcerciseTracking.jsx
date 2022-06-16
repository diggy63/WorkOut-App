import React, { useEffect, useState } from "react";
import { Card, CardContent, Form, Segment, Button, Table } from "semantic-ui-react";
import * as WorkoutServices from "../../utils/workoutServices"
import "./ExcerciseTracking.css"

export default function ExcerciseTracking({ data, changeWeight }) {
    const[exstate, setExstate] = useState({
        weight: 0,
        id: data._id,
    })

    useEffect(() =>{
      if(exstate.weight<0){
        exstate.weight=0;
      }
      changeWeight(exstate);
    },[exstate])

  function handleChange(e) {
    setExstate({ ...exstate, [e.target.name]: e.target.value });
  }


    async function handleSubmit(e) {
        console.log('click')
       changeWeight(exstate);
  }

  async function addWeight(e){
    setExstate({...exstate,
      weight:parseInt(e.target.value) + parseInt(e.target.innerText),
    })
  }
  async function loseWeight(e){
    console.log(parseInt(e.target.innerText))
    setExstate({...exstate,
      weight:parseInt(e.target.value) + parseInt(e.target.innerText),
    })
  }
  async function resetWeight(){
    setExstate({...exstate,
      weight:0,
    })
  }
  return (
      <>
    <Table.Row>
    <Table.Cell>{data.name}</Table.Cell>
    <Table.Cell>Reps:{data.reps} Sets:{data.sets} </Table.Cell>
    <Table.Cell> 
        <div className="flex">
        <div>
        Weight:{data.weight} 
        </div>
        <div className="btnRow">
        <Button value={exstate.weight} onClick={addWeight}>+45</Button>
        <Button value={exstate.weight} onClick={addWeight}>+10</Button>
        <Button value={exstate.weight} onClick={addWeight}>+5</Button>
        <Button value={exstate.weight} onClick={resetWeight}>reset</Button>
        <Button value={exstate.weight} onClick={loseWeight}>-5</Button>
        <Button value={exstate.weight} onClick={loseWeight}>-10</Button>
        <Button value={exstate.weight} onClick={loseWeight}>-45</Button>
        </div>
        </div>
        </Table.Cell>
  </Table.Row>
    </>
  );
}
