import React from "react";
import { Button, Card } from "semantic-ui-react";

export default function Excercise({data}){
    // const descrip = stringToD(data.description)
    function removeHTML(str){ 
        const tmp = document.createElement("div");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    };
    const onlyText = removeHTML(data.description); 
    function handleClick(e){
        console.log('Click')
    }



    console.log(data.description.innerHtml)
    return(
        <Card raised>
            <Card.Header>
                {data.name}
            </Card.Header>
        <Card.Content>
            <Card.Description>{onlyText}</Card.Description>
        </Card.Content>
        <Button onClick={handleClick}>Add</Button>
        </Card>
        )
    }