import React from "react";
import { Grid, Button, Form, Card, Header, Image, Segment, CardContent } from "semantic-ui-react";

export default function Excercise({data}){
    //console.log(data, "data in excercise form")
    return(
        <Card>
            <Card.Header as="h3">
                {data.name}
            </Card.Header>
            <Card.Content as="h5">
                {data.description}
            </Card.Content>
            <CardContent as="h5">
                Reps: {data.reps} Sets: {data.sets}
            </CardContent>
        </Card>
    )
}