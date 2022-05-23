import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import { Grid, Card, Dimmer, Segment, Image, GridRow } from "semantic-ui-react";

export default function Workouts({user, handleLogout}){
    return(
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
            <h1>Workouts</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1200 }}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}