import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import { Grid, Card, Dimmer, Segment, Image, GridRow } from "semantic-ui-react";
import ExcerciseFeed from "../../components/ExcerciseFeed/ExcerciseFeed";
import { Dropdown } from "semantic-ui-react";

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
    //makeApiCallImg();
  }, []);

    useEffect(() =>{
    makeApiCall();
    },[search])

  async function makeApiCall() {
    const finding = await ApiService.find(search);
    //const imgFind = await ApiService.findImg();
    //console.log(finding, "finding");
    setExs(finding.results);
    // console.log(imgFind, "img");
    // setImg(imgFind);
  }
//   async function makeApiCallImg() {
//     const imgFind = await ApiService.findImg();
    // console.log(imgFind, "img");
    // setImg(imgFind);
//   }
 
  function handleChange(e){
        SetSearch(e.target.innerText)
  }

  //this is for /muscles api call

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <h1>title</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 1200 }}>
          <Dropdown
            style={{ maxWidth: 200 }}
            placeholder="Select Zone"
            value={search}
            fluid
            selection
            options={workoutOptions}
            onChange={handleChange}
          />
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
