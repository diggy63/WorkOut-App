import React, { useState, useEffect } from "react"
import { Card,Button, Table } from "semantic-ui-react"
import { Link } from "react-router-dom";
import "./LikedWorkouts.css"
import * as likeApi from "../../utils/likeApi"

export default function Liked({liked, track, user, handleUnlikeUp}){
    let likeId
   //console.log(liked,"liked")
   if(liked[0]){ 
        liked[0].likes.forEach(element => {
       if(element.userId === user._id){
            likeId = element._id
       }
        
       
         });
    }
    function handleClick(WOID){
        track(WOID)

    }
    async function removeLike(likeId){
        const unlike = likeApi.removeLike(likeId)
        handleUnlikeUp()
    }
    function handleUnlike(e){
        removeLike(likeId)
    }

    const WO = liked.map((data,i) =>{
        return(
            <Table.Row key={i}>
            <Table.Cell>{data.workoutName}</Table.Cell>
            <Table.Cell>
            <Button floated="right" secondary onClick={() => {handleUnlike()}}>Unlike Workout</Button>
                <Button floated="right" secondary onClick={() => {handleClick(data._id)}}>Track Workout</Button></Table.Cell>
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