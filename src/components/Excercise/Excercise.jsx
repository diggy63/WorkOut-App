import React from "react";
import { Card } from "semantic-ui-react";

export default function Excercise({data}){
    // const descrip = stringToD(data.description)
    function removeHTML(str){ 
        const tmp = document.createElement("div");
        tmp.innerHTML = str;
        return tmp.textContent || tmp.innerText || "";
    };
    const onlyText = removeHTML(data.description); 



    console.log(data.description.innerHtml)
    return(
        <Card raised>
            <Card.Header>
                {data.name}
            </Card.Header>
        <Card.Content>
            <Card.Description>{onlyText}</Card.Description>
        </Card.Content>
        </Card>
        )
    }