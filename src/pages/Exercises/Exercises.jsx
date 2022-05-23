import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import { Grid, Card, Dimmer, Segment, Image, GridRow  } from 'semantic-ui-react'

export default function Excersices({user, handleLogout}){
    const[exs, setExs] = useState([])
    const[disEx, setDisEX] = useState({})
   useEffect(() => {
    makeApiCall()
   }, [])

   async function makeApiCall(){
     const finding = await ApiService.find()
     console.log(finding, "finding")
    setExs(finding.results)
   }
   console.log('postaApi' , exs)
//    const excers = exs.map((data) =>{
//        return( 
//        <img src={data.image}/>
//        )
//    })




   //this is for /muscles api call
   const excers = exs.map((data, i) => {
       return ( 
           <div key={i}>
           <h2>{data.name}</h2>
           <div>{data.description}</div>
           </div>
       )
       
   })

    return(
        <>
       
        
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                <Header user={user} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <h1>Excersices!!!!</h1>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                <h3>{excers}</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        </>
    )
}