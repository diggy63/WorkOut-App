import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  Segment,
  Image,
  Icon,
  Dropdown,
  Menu,
  Grid,
} from "semantic-ui-react";

export default function Head({ user, handleLogout }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 600;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  if (isMobile) {
    return (
      <Segment className="background" inverted color="grey" clearing>
        <Grid columns={2}>
          
          <Grid.Column>
            <Header as="h2" floated="left">
              <Link to={`/${user?.username}`}>
                <Image
                  size="mini"
                  src={
                    user?.photoUrl
                      ? user?.photoUrl
                      : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                  }
                  avatar
                ></Image>
              </Link>
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Dropdown
              text="Menu"
              floating
              labeled
              button
              floated="right"
              className="icon"
            >
              <Dropdown.Menu className="Right">
                <Dropdown.Item>
                  <Link to={`/${user?.username}`}>
                    <span className="text">Home</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="" to="/workouts">
                    <span className="text">Workouts</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="" to="/exercises">
                    <span className="text">Excersices</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link className="" to="" onClick={handleLogout}>
                    <span className="text">Logout</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  } else {
    return (
      <Segment className="background" inverted color="grey" clearing>
        <div className="bg">
          <Header as="h2" className="marginTop" floated="right">
            <Link className="navBarLink" to={`/${user?.username}`}>
              Home
            </Link>
            <Link className="navBarLink" to="/exercises">
              Excersices
            </Link>
            <Link className="navBarLink" to="/workouts">
              Workouts
            </Link>
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
}
