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
import MakeWorkoutInDB from "../MakeWorkoutnDB/MakeWokoutInDb"
import WorkoutDetails from "../WorkoutDetails/WorkoutDetails"
import Profile from "../ProfilePage/ProfilePage"
import TrackWorkout from "../TrackWorkout/TrackWorkout";
import DoneDetails from "../DoneDetails/Donedetails";
import AddEx from "../AddEx/AddEx"


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
    setExs(finding);
  }

  async function changeSearch(data){
    setSearch(data)
  }

  async function changeExSearch(q,bodypart){
    const newExSearch = await ApiService.findSearch(q,bodypart)
    console.log(newExSearch , "here")
    
    if(newExSearch.length === 0){
      setExs(["Nothing"])
    }else{
      setExs(newExSearch)
    }
  }

  async function getAll(e){
    makeApiCall();
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
        <Route path="/" element={<Workouts user={user} handleLogout={handleLogout} />} />
        <Route path="/exercises" element={<Excersices user={user} handleLogout={handleLogout} />} />
        <Route path="/exercises/new" element={<AddEx user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts" element={<Workouts user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts/new" element={<MakeWorkoutInDB user={user} handleLogout={handleLogout} exs={exs} changeSearch={changeSearch} />} />
        <Route path="/workouts/create/:id" element={<CreateWorkout user={user} handleLogout={handleLogout} exs={exs} changeSearch={changeSearch} changeExSearch={changeExSearch} getAll={getAll} />} />
        <Route path="/workouts/:id" element={<WorkoutDetails user={user} handleLogout={handleLogout} exs={exs} changeSearch={changeSearch} />} />
        <Route path="/:id" element={<Profile user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts/track/:id" element={<TrackWorkout user={user} handleLogout={handleLogout} />} />
        <Route path="/workouts/donedetails/:id" element={<DoneDetails user={user} handleLogout={handleLogout} />} />
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
