import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./SignupPage.css"

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Loader,
} from "semantic-ui-react";

export default function SignUpPage(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    console.log(selectedFile, "photofile");
    const formData = new FormData();
    formData.append("photo", selectedFile);
    for (let feildName in userInfo) {
      formData.append(feildName, userInfo[feildName]);
    }
    //console.log(formData)
    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      navigate("/workouts");
    } catch (err) {
      console.log("could not create user");
      setError(err);
      setLoading(false);
    }
  }
  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    //console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  if (loading) {
    return (
      <div className="flexCenterSignUp">
        <div className="signUpBox">
          <h2>We are working hard to sign you up</h2>
        <Loader active />

        </div>
      </div>
      
    );
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <Header.Content>Sign Up</Header.Content>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="username"
                value={userInfo.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={userInfo.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={userInfo.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={userInfo.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.Field>
                <Form.Input
                  type="file"
                  name="photo"
                  placeholder="upload image"
                  onChange={handleFileInput}
                />
              </Form.Field>
              <Button type="submit" className="btn">
                Signup
              </Button>
            </Segment>
            {/* {error ? <ErrorMessage error={error} /> : null} */}
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
