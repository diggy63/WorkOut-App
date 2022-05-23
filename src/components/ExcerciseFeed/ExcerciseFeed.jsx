import React from "react";
import Excercise from "../Excercise/Excercise";
import {Card} from "semantic-ui-react";
export default function Feed({exs}) {

    const excers = exs.map((data, i) => {
        return (
            <Excercise key={i} data={data}/>
        );
      });


    return( 
        <Card.Group itemsPerRow={3} stackable>
            {excers}

        </Card.Group>
    )
}