import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/workouts");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <Grid textAlign="center" verticalAlign="middle" style={{ height: "50vh" }}>
        <Grid.Column style={{ maxWidth: 450}}>
          <Segment>
          <Header as="h2" textAlign="center">
            Login to your
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/signup">Sign Up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

