const Excersice = require("../models/Excercise");
const findOrCreate = require("mongoose-find-or-create");

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

async function getOrCreateDB(results, bp) {
  //console.log(bp)
  try {
    const ex = await Excersice.findOne({ name: results.name });
    if (!ex) {
      const newEx = await Excersice.create(results);
      newEx.bodyPart = bp;
      newEx.save();
    } else {
    }
  } catch (error) {
    console.log("error in making");
  }
}

async function findExsInDB(bp, res) {
  const allExcers = await Excersice.find({ bodyPart: bp });
  res.status(200).json(allExcers);
}

async function find(req, res) {
  const sea = exCat[req.params.id];
  const options = {
    method: "GET",
    //search by muscle groups and english language
    url: `https://wger.de/api/v2/exercise/?category=${sea}&language=2&limit=80`,
    headers: {
      Authorization: "Token ac8d20dd5cdd6ed1a412fb06269185a7ef2f65e7",
    },
  };
  try {
    axios
      .request(options)
      .then(function (response) {
        response.data.results.forEach((item) => {
          getOrCreateDB(item, req.params.id);
        })
          findExsInDB(req.params.id, res);
      })
      .catch(function (error) {
        console.error("error in find");
      });
  } catch (err) {
    console.log("could not reach DB")
    return res.status(401).json(err);
  }
}
//an image function that is not in use yet
async function findImg(req, res) {
  const imgOptions = {
    method: "GET",
    url: "https://wger.de/api/v2/exerciseimage/?is_main=True",
    headers: {
      Authorization: "Token ac8d20dd5cdd6ed1a412fb06269185a7ef2f65e7",
    },
  };
  try {
    axios
      .request(imgOptions)
      .then(function (response) {
        //console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

//create or find function
async function findToAdd(req, res) {
  //console.log(req.body.name, "<-------------------------------body")
  try {
    const ex = await Excersice.findOne({ name: req.body.name });
      res.status(200).json({ workout: ex });
  } catch (err) {
    console.log("couldnt find or create one");
    return res.status(401).json(err);
  }
}

async function findSearch(req, res) {
  console.log(req.params)
  const lowerQ = req.params.qid.toLowerCase();
  const qExcercies = await Excersice.find({})
  const foundResult = []
  await qExcercies.forEach(item =>{
    if (item.name.toLowerCase().includes(lowerQ)) {
      foundResult.push(item)
    }
  })
  res.status(200).json(foundResult);
  console.log(foundResult)
}

async function createNew(req, res) {
  try {
    const newEx = await Excersice.find({ name: req.body.name });
    if (newEx.length === 0) {
      const newwwer = await Excersice.create(req.body);
      newwwer.userMade = req.user;
      newwwer.save();
      res.status(200).json(newwwer);
    }
    res.status(200).json(newEx);
  } catch (error) {}
}

module.exports = {
  find,
  findImg,
  findToAdd,
  findSearch,
  createNew,
};
