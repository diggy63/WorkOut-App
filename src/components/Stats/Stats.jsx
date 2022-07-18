import React from "react"
import { Card, Button } from "semantic-ui-react"

export default function Stats({allWorkouts, stats, statName, WOToTrack}){

    const bestStats = stats.map((item,i) => {
        return(
          <Card.Content className="marginAllTen" key={i}>
            <h4>Best {statName[i]} lift : {item}</h4>
            <Button onClick = {handleStatChange} value={i}>See Progress</Button>
          </Card.Content>
        )
      })

    function handleStatChange(e){
        WOToTrack(e.target.value)
    }

    return(
        <Card>
        <h1>Stats</h1>
        <Card.Header>
                <div className="flex">
                <h3>Workouts Done:{allWorkouts.length}</h3>
                
                </div>
        </Card.Header>
        {bestStats}
        </Card>
    )
}