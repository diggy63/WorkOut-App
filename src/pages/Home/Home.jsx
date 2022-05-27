import React from "react";
import Header from "../../components/Header/Header";
import { Grid, Card, Dimmer, Segment, Image, GridRow } from "semantic-ui-react";
import "./Home.css"


export default function Home({user, handleLogout}){
    return(
        <>
        
        <Header user={user} handleLogout={handleLogout} />
        <div className="flexcenter">
            <Card centered>
                <Card.Header as="h2">Welcome To Diggys Weightroom</Card.Header>
                <Card.Content>Login and lets get to working out</Card.Content>

            </Card>
            </div>
        </>
    )
}