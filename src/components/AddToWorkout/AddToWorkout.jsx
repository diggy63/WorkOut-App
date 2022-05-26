import React, {useState} from "react";
import { Card, GridColumn, Grid, GridRow, Segment, Image } from "semantic-ui-react";
import Excercise from "../Excercise/Excercise";
import { Dropdown } from "semantic-ui-react";
import "./AddToWorkout.css"


export default function AddToW({exs, changeSearch, handleAdd}){
  const [search, setSearch] = useState("Chest");
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

    function handleChange(e){
      setSearch(e.target.value);
      changeSearch(e.target.innerText);
    }


    //console.log(exs)
    const excers = exs.map((data, i) => {
        return (
            <Excercise key={i} data={data} handleAdd={handleAdd}/>
        );
      });
    return(
      <>
      <Segment>
      <Grid.Row>
        <Grid.Column className="flexcenter" floated="right">
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
          <Grid.Column textAlign="center">
        <Card.Group itemsPerRow={2} stackable>
          
                {excers}
        </Card.Group>
        </Grid.Column>
        </Segment>
        </>
    )
}