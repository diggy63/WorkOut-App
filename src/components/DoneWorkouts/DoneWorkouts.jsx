import React, { useState, useEffect } from "react"
import { Card, Button, Table } from "semantic-ui-react"
import { Link, useNavigate } from "react-router-dom";
import "./DoneWorkouts.css"

export default function Done({done}){
    const navigate = useNavigate()

    //console.log(done, "in Done")
    //setExs(done)
    function handleClick(workoutid){
        navigate(`/workouts/donedetails/${workoutid}`)
        console.log("click")
    }


    const WO = done.map((data,i) =>{
        return(
            <Table.Row key={i}>
            <Table.Cell>{data.workoutName}</Table.Cell>
            <Table.Cell><Button floated="right" secondary onClick={() => handleClick(data._id)}>Details</Button></Table.Cell>
          </Table.Row>
        )
    })

    
    return(
        <>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Workout name</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {WO}
        {/* {works} */}
        </Table.Body>
      </Table>
        </>
    )
}