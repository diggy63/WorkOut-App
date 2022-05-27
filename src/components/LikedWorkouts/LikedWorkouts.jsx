import React, { useState, useEffect } from "react"
import { Card,Button, Table } from "semantic-ui-react"
import { Link } from "react-router-dom";
import "./LikedWorkouts.css"

export default function Liked({liked, track}){
   // console.log(liked,"liked")
    function handleClick(WOID){
        track(WOID)
    }

    const WO = liked.map((data,i) =>{
        return(
            <Table.Row key={i}>
            <Table.Cell>{data.workoutName}</Table.Cell>
            <Table.Cell><Button floated="right" secondary onClick={() => {handleClick(data._id)}}>Track Workout</Button></Table.Cell>
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