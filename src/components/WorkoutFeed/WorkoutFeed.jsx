
import React, { useState, useEffect} from "react"
import * as workoutServices from "../../utils/workoutServices"
import { Grid, Button, Card, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function WorkoutFeed({workouts}){

    const works = workouts.map((data, i) => {




        //console.log(data)
        if(!data.userCompleted){ 
        return (
            <Table.Row>
            <Table.Cell>{data.workoutName}</Table.Cell>
            <Table.Cell>{data.description}</Table.Cell>
            <Table.Cell><Link to={`/workouts/${data._id}`} ><Button floated="right">See Details </Button></Link> likes:{data.likes.length}</Table.Cell>
          </Table.Row>
        );
        }
      });
    return(
        
        <>
      
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Workout name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

        {works}
        </Table.Body>
      </Table>
        </>
    )
}