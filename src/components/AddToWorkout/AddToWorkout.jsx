import React, { useState } from "react";
import {
  Card,
  GridColumn,
  Grid,
  GridRow,
  Segment,
  Image,
  Table,
  Loader,
  Input,
  Button,
  Form,
} from "semantic-ui-react";
import Excercise from "../Excercise/Excercise";
import { Dropdown } from "semantic-ui-react";
import "./AddToWorkout.css";

export default function AddToW({
  exs,
  changeSearch,
  handleAdd,
  changeExSearch,
  getItAll
}) {
  const [search, setSearch] = useState("Chest");
  const [exSearch, setExSearch] = useState("");
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

  function handleChange(e) {
    setSearch(e.target.value);
    changeSearch(e.target.innerText);
  }
  function handleSearchChange(e) {
    setExSearch(e.target.value);
  }

  function findEx(e) {
    changeExSearch(exSearch, search);
  }
  function getAll(){
    getItAll()
  }

  //console.log(exs)
  const excers = exs.map((data, i) => {
    return <Excercise key={i} data={data} handleAdd={handleAdd} isAdd={true} />;
  });
  if (exs[0] === "Nothing") {
    return (
      <Segment inverted color="grey">
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={8}>
              <Form autoComplete="off" onSubmit={findEx}>
                <Input
                  style={{ maxWidth: 200 }}
                  name="q"
                  placeholder="search"
                  value={exSearch}
                  onChange={handleSearchChange}
                  // required
                />
                <Button type="submit" className="btn">
                  Search
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={getAll}>Get All</Button>
            </Grid.Column>
            <Grid.Column>
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
          <Grid.Row textAlign="center">
            <Grid.Column>
              <h1>Nothing Found in Search</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
  if (exs.length === 0) {
    return (
      <Segment inverted color="grey">
        <Grid.Row>
          <Grid.Column className="flexcenter" floated="right">
            <Form autoComplete="off" onSubmit={findEx}>
              <Input
                name="q"
                placeholder="search"
                value={exSearch}
                onChange={handleSearchChange}
                // required
              />
              <Button type="submit" className="btn">
                Search
              </Button>
            </Form>
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
        <Loader active inline="centered" />
      </Segment>
    );
  } else {
    return (
      <>
        <Segment inverted color="grey">
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Form autoComplete="off" onSubmit={findEx}>
                  <Input
                    name="q"
                    placeholder="search"
                    value={exSearch}
                    onChange={handleSearchChange}
                    // required
                  />
                  <Button type="submit" className="btn">
                    Search
                  </Button>
                </Form>
              </Grid.Column>
              <Grid.Column>
                <Button onClick={getAll}>Get All</Button>
              </Grid.Column>
              <Grid.Column>
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
              <Grid.Column textAlign="center">
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Workout name</Table.HeaderCell>
                      <Table.HeaderCell>Description</Table.HeaderCell>
                      <Table.HeaderCell>Add</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>{excers}</Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    );
  }
}
