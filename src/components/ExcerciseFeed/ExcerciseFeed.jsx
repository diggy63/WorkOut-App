import React, { useState } from "react";
import Excercise from "../Excercise/Excercise";
import { Card, Table, Dimmer, Loader, Image, Segment } from "semantic-ui-react";
export default function Feed({ exs }) {
  const [loading, setLoading] = useState(true);


  const excers = exs.map((data, i) => {
    return <Excercise key={i} data={data} isADD={false} />;
  });

  if (exs.length === 0) {
    return (
        <Loader active inline='centered' />
    );
  } else {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Workout name</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{excers}</Table.Body>
      </Table>
    );
  }
}
