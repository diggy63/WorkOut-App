const axios = require("axios");
const exCat = {
  Abs: 10,
  Arms: 8,
  Back: 12,
  Calves: 14,
  Chest: 11,
  Legs: 9,
  Shoulders: 13,
};

async function find(req, res) {
  const options = {
    method: "GET",
    //search by muscle groups and english language
    url: "https://wger.de/api/v2/exercise/?category=8&language=2",
    headers: {
      Authorization: "Token ac8d20dd5cdd6ed1a412fb06269185a7ef2f65e7",
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function findImg(req, res) {
  const options = {
    method: "GET",
    // url: 'https://wger.de/api/v2/exerciseimage/?id=3',
    url: "https://wger.de/api/v2/exerciseimage/?is_main=True&id=3",
    headers: {
      Authorization: "Token ac8d20dd5cdd6ed1a412fb06269185a7ef2f65e7",
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

module.exports = {
  find,
  findImg,
};
