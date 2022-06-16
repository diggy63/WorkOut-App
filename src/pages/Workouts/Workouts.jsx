import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  Grid,
  Card,
  Dimmer,
  Segment,
  Image,
  GridRow,
  Button,
  Form,
  Input,
  Table,
  Menu,
  Label,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import WorkoutFeed from "../../components/WorkoutFeed/WorkoutFeed";
import * as WorkoutServices from "../../utils/workoutServices";
import "./Workouts.css";

export default function Workouts({ user, handleLogout }) {
  const [search, setSearch] = useState({ q: "" });
  const [WOS, setWOS] = useState([]);
  async function getAll() {
    const allWO = await WorkoutServices.getAll();
    //console.log(allWO.workout, 'in workouts')
    setWOS(allWO.workout);
  }

  useEffect(() => {
    getAll();
  }, []);

  // useEffect(() =>{
  //   getSearch
  // },)
  async function findWO(e) {
    const searchWO = await WorkoutServices.search(search);
    setWOS(searchWO.WorkO);
  }

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  function handleAll(e) {
    getAll();
  }
  return (
    <>
      
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Header user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
              <h1>Workouts</h1>
              <Link to="/workouts/new">
                <Button>Create Workout</Button>
              </Link>
            </Grid.Column>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column centered>
            <div className="search-bar">
              <Form autoComplete="off" onSubmit={findWO}>
                <Input
                  name="q"
                  placeholder="search"
                  value={search.q}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="btn">
                  Search
                </Button>
              </Form>
              <Button onClick={handleAll}>All Workouts</Button>
              <Link to="/workouts/new">
                <Button>Create Workout</Button>
              </Link>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
            <WorkoutFeed workouts={WOS} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 1200 }}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
