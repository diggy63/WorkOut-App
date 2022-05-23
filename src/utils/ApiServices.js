import tokenService from "./tokenService";

const BASE_URL = "/api/exercises/";

export function find(bodyPart) {
    return fetch(`${BASE_URL}/${bodyPart}`, {
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

  export function findImg() {
    return fetch(`${BASE_URL}/img`, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }