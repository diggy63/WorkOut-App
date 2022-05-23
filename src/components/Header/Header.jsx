import "./Header.css"
import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon } from "semantic-ui-react";


export default function Head({user, handleLogout}) {
  return (
    <Segment clearing>
      <Header as="h2" floated="right">
        <Link className="navBarLink" to="/">
          <Icon name="home"></Icon>
        </Link>
        <Link className="navBarLink" to="" onClick={handleLogout}>
          Logout
        </Link>
        <Link  className="navBarLink" to="/exercises">Excersices</Link>
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
    </Segment>
  );
}
