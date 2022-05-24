import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Home from "../Home/Home";
import Excersices from "../Exercises/Exercises";
import Workouts from "../Workouts/Workouts";
import CreateWorkout from "../CreateWorkout/CreateWorkout"
import * as ApiService from "../../utils/ApiServices";

function App() {

  const [exs, setExs] = useState([]);
  const [search, setSearch] = useState("Chest");
  const [disEx, setDisEX] = useState({});
  const [img, setImg] = useState({});

  const workoutOptions = [
    {
      key: "Abs",
      text: "Abs",
      value: "Abs",
    },
    {
      key: "Arms",
      text: "Arms",
      value: "Arms",
    },
    {
      key: "Back",
      text: "Back",
      value: "Back",
    },
    {
      key: "Calves",
      text: "Calves",
      value: "Calves",
    },
    {
      key: "Chest",
      text: "Chest",
      value: "Chest",
    },
    {
      key: "Legs",
      text: "Legs",
      value: "Legs",
    },
    {
      key: "Shoudlers",
      text: "Shoulders",
      value: "Shoulders",
    },
  ];


  useEffect(() => {
    makeApiCall();
    //makeApiCallImg();
  }, []);

    useEffect(() =>{
    makeApiCall();
    },[search])

  async function makeApiCall() {
    const finding = await ApiService.find(search);
    //const imgFind = await ApiService.findImg();
    console.log(finding, "finding");
    setExs(finding.results);
    // console.log(imgFind, "img");
    // setImg(imgFind);
  }

  async function changeSearch(data){
    setSearch(data)
  }













  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Home user={user} handleLogout={handleLogout} />} />
        <Route path="/exercises" element={<Excersices user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts" element={<Workouts user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts/new" element={<CreateWorkout user={user} handleLogout={handleLogout} exs={exs} changeSearch={changeSearch} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
