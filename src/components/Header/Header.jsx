import "./Header.css"
import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";


export default function Head({user, handleLogout}) {
  return (
    <Segment className="background" inverted color="grey" clearing>
    <div className="bg">
      <Header as="h2" className="marginTop" floated="right">
        
        <Link  className="navBarLink" to={`/${user?.username}`}>Home</Link>
        <Link  className="navBarLink" to="/exercises">Excersices</Link>
        <Link  className="navBarLink" to="/workouts">Workouts</Link>
        <Link className="navBarLink" to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h2" floated="left">
        <Link to={`/${user?.username}`}>
          <Image
            src={
              user?.photoUrl
                ? user?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar
          ></Image>
        </Link>
      </Header>
      </div>
    </Segment>
  );
}
