import { CodeCommit } from "aws-sdk";
import tokenService from "./tokenService";

const BASE_URL = "/api/workouts/";


export function createWO(WO) {
    //console.log(WO)
    return fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(WO),
      headers: new Headers({ "Content-Type": "application/json",
      'Authorization': 'Bearer ' + tokenService.getToken()
     }),
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

export function find(WOID){
    //console.log(WOID.id, "inApiCall")
    return fetch(`${BASE_URL}/${WOID.id}`,{
        method:'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
      })

}


export function addExcercise(WOID, EID){
    console.log(WOID)
    console.log(EID)
    return fetch(BASE_URL, {
        method:'PUT',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
          }
    }).then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
      })
}
