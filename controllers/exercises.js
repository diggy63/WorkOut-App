const Excersice = require("../models/Excercise");
const findOrCreate = require('mongoose-find-or-create')

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
        //console.log(response.data);
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error("error");
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function findImg(req, res) {
  const imgOptions = {
    method: "GET",
    // url: 'https://wger.de/api/v2/exerciseimage/?id=3',
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

async function createOrFind(req,res){
    let newbodyPart = '';
    //console.log(req.body.name, ",<---------req.body")
    Object.keys(exCat).forEach(e =>{
        if(req.body.category === exCat[e]){ 
        newbodyPart = e;
        }
    })
    try {
        const ex = await Excersice.findOne({name:req.body.name})
        console.log(ex, "already created")
        if(!ex){
            const newEx = await Excersice.create(req.body)
            newEx.bodyPart= newbodyPart
            newEx.save();
            console.log(newEx, "new creation")
            res.status(201).json({workout:newEx})
        }
        res.status(200).json({workout:ex})
       //console.log(ex)
        
    } catch (err) {
        // createNew(req.body, newbodyPart);
        console.log("couldnt find or create one")
        return res.status(401).json(err);
        
    }
}


async function createNew(data, bodyPart){
    console.log(data)
    console.log(bodyPart)
}




module.exports = {
  find,
  findImg,
  createOrFind,
};
