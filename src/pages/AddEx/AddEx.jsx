import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Grid, Card, Dimmer, Segment, Image, GridRow, Button } from "semantic-ui-react";
import CreateExcerciseInDB from "../../components/CreateExcerciseInDB/CreateExcerciseInDB"

export default function MakeWokout({user, handleLogout}){
    return(
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column textAlign="center">
            <CreateExcerciseInDB/>
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}