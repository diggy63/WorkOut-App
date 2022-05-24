import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import {
  Grid,
  Card,
  Dimmer,
  Segment,
  Image,
  GridRow,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddToWorkout from "../../components/AddToWorkout/AddToWorkout";

export default function Workouts({ user, handleLogout, exs , changeSearch}) {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <h1>New Workout</h1>
        </Grid.Column>
      </Grid.Row>
        <Grid.Row>
          <Card.Group itemsPerRow={2} stackable>
            <Grid.Column textAlign="center" style={{ maxWidth: 400 }}>
              <h2>workout</h2>
            </Grid.Column>
            <Grid.Column textAlign="center" style={{ maxWidth: 800 }}>
              <h2>excercises</h2>
              <AddToWorkout exs={exs} changeSearch={changeSearch} textAlign="center"/>
            </Grid.Column>
          </Card.Group>
        </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
