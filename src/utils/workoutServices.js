import { CodeCommit } from "aws-sdk";
import tokenService from "./tokenService";

const BASE_URL = "/api/workouts/";

export function createWO(WO) {
  //console.log(WO)
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(WO),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}
export function makeNewTrack(WO) {
  //console.log(WO, "inApi")
  return fetch(`${BASE_URL}track/${WO}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function find(WOID) {
  //console.log(WOID.id, "inApiCall");
  return fetch(`${BASE_URL}${WOID.id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function addExcercise(WOID, EID, repSet) {
  return fetch(`${BASE_URL}${WOID._id}/add/${EID._id}`, {
    method: "POST",
    body: JSON.stringify(repSet),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function getAll() {
  return fetch(BASE_URL).then((res) => {
    if (res.ok) return res.json();
  });
}

export function changRepSet(ExInfo) {
  //console.log(ExInfo, "inApi");
  return fetch(`${BASE_URL}exs/repset`, {
    method: "POST",
    body: JSON.stringify(ExInfo),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function changeWeightDB(ExInfo) {
  //console.log(ExInfo, "inApi");
  return fetch(`${BASE_URL}exs/weight`, {
    method: "POST",
    body: JSON.stringify(ExInfo),
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function findDoneWorkouts() {
  console.log("making a call");
  return fetch(`${BASE_URL}dones`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}


export function findAllOfOne(WOID) {
  console.log(WOID.id, "inApiCall findallofOne");
  return fetch(`${BASE_URL}allofone/${WOID.id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function deleteOne(WOID) {
  console.log(WOID, "inApiCall");
  return fetch(`${BASE_URL}delete/${WOID}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}

export function search(q){
  return fetch(`${BASE_URL}search/${q.q}`,{
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Bad Credentials! CHECK THE SERVER TERMINAL!");
  });
}