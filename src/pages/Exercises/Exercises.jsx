import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import * as ApiService from "../../utils/ApiServices";
import userService from "../../utils/userService";
import { Grid, Card, Dimmer, Segment, Image, GridRow } from "semantic-ui-react";
import ExcerciseFeed from "../../components/ExcerciseFeed/ExcerciseFeed";

export default function Excersices({ user, handleLogout }) {
  const [exs, setExs] = useState([]);
  const [disEx, setDisEX] = useState({});
  const [img, setImg] = useState({});
  useEffect(() => {
    makeApiCall();
    makeApiCallImg();
  }, []);

  async function makeApiCall() {
    const finding = await ApiService.find();
    console.log(finding, "finding");
    setExs(finding.results);
  }
  async function makeApiCallImg() {
    const imgFind = await ApiService.findImg();
    console.log(imgFind, "img");
    setImg(imgFind);
  }
  console.log("postaApi", exs);
  console.log("imgApi", img);
  //    const excers = exs.map((data) =>{
  //        return(
  //        <img src={data.image}/>
  //        )
  //    })

  //this is for /muscles api call
  const excers = exs.map((data, i) => {
    return (
      <div key={i}>
        <h1>{data.name}</h1>
        {data.description}
      </div>
    );
  });

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header user={user} handleLogout={handleLogout} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h1>title</h1>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 1200 }}>
          <ExcerciseFeed exs={exs}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
