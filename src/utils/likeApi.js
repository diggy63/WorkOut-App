import tokenService from "./tokenService";

const BASE_URL = "/api/likes";

export function create(WOID) {
  console.log(WOID);
  return fetch(`${BASE_URL}/${WOID}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Not logged In! Check Express terminal");
  });
}

export function removeLike(likeId) {
  return fetch(`${BASE_URL}/${likeId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("Not logged In! Check Express terminal");
  });
}

export function findLikedWorkouts() {
  return fetch(BASE_URL, {
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
  });
}
