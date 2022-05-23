import React, {useState} from "react";
import { Card } from "semantic-ui-react";
import Excercise from "../Excercise/Excercise";
import { Dropdown } from "semantic-ui-react";


export default function AddToW({exs}){
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
      setSearch(e.target.value)
    }


    console.log(exs)
    const excers = exs.map((data, i) => {
        return (
            <Excercise key={i} data={data}/>
        );
      });
    return(
        <Card.Group itemsPerRow={2} stackable>
            <Dropdown
            style={{ maxWidth: 200 }}
            placeholder="Select Zone"
            value={search}
            fluid
            selection
            options={workoutOptions}
            onChange={handleChange}
          />
                {excers}
        </Card.Group>
    )
}