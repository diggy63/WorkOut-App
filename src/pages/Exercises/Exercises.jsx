import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import { Grid, Card, Dimmer, Segment, Image, GridRow, Button } from "semantic-ui-react";
import ExcerciseFeed from "../../components/ExcerciseFeed/ExcerciseFeed";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Excersices({ user, handleLogout }) {
  const [exs, setExs] = useState([]);
  const [search, SetSearch] = useState("Chest");
  const [disEx, setDisEX] = useState({});
  const [img, setImg] = useState({});

  const workoutOptions = [
    {
      key: "Abs",
      text: "Abs",
      value: "Abs",
    },
    {
      key: "Arms",
      text: "Arms",
      value: "Arms",
    },
    {
      key: "Back",
      text: "Back",
      value: "Back",
    },
    {
      key: "Calves",
      text: "Calves",
      value: "Calves",
    },
    {
      key: "Chest",
      text: "Chest",
      value: "Chest",
    },
    {
      key: "Legs",
      text: "Legs",
      value: "Legs",
    },
    {
      key: "Shoudlers",
      text: "Shoulders",
      value: "Shoulders",
    },
  ];


  useEffect(() => {
    makeApiCall();
  }, []);

    useEffect(() =>{
    makeApiCall();
    },[search])

    //finds the excercises by the search parameter
  async function makeApiCall() {
    const finding = await ApiService.find(search);
    setExs(finding);
    console.log(finding)
  }
 
  function handleChange(e){
        SetSearch(e.target.innerText)
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <Segment>
            <h1>All Excercises</h1>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} textAlign="center">
          <Dropdown
            style={{ maxWidth: 400 }}
            placeholder="Select Zone"
            value={search}
            fluid
            selection
            options={workoutOptions}
            onChange={handleChange}
          />
        </Grid.Column>
        <Grid.Column width={4}>
        <Link to="/exercises/new">
          <Button>Add New Excersice</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}>
          <ExcerciseFeed exs={exs} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
