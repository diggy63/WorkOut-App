import React from "react";
import Excercise from "../Excercise/Excercise";
import {Card} from "semantic-ui-react";
export default function Feed({exs}) {

    const excers = exs.map((data, i) => {
        return (
            <Excercise key={i}/>
        //   <div key={i}>
        //     <h1>{data.name}</h1>
        //     {data.description}
        //   </div>
        );
      });


    return( 
        <Card.Group itemsPerRow={3} stackable>
            {excers}

        </Card.Group>
    )
}