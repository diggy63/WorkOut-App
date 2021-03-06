import tokenService from "./tokenService";

const BASE_URL = "/api/exercises/";

export function findToAdd(WO) {
    //console.log(WO, "in  api here")
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

  export function createEx(WO) {
    //console.log(WO, "in  api here")
    return fetch(`${BASE_URL}create`, {
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