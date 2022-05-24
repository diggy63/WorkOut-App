import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import { Grid, Card, Dimmer, Segment, Image, GridRow, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import WorkoutDBCreate from "../../components/WorkoutDBCreate/WorkoutDBCreate";

export default function MakeWokout({user, handleLogout}){
    return(
        <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <WorkoutDBCreate />
          </Grid.Column>
          </Grid.Row>
        </Grid>
    )
}