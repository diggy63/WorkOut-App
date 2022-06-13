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

async function getOrCreateDB(results, bp){
  //console.log(bp)
  
  const ex = await Excersice.findOne({name:results.name})
  if(!ex){
    const newEx = await Excersice.create(results)
    newEx.bodyPart= bp
    newEx.save();
    //console.log(newEx);
  }else{
    console.log("found")
  }

}

async function findExsInDB(bp, res){
  const allExcers = await Excersice.find({bodyPart:bp})
  res.status(200).json(allExcers)
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
        response.data.results.forEach(item => {
          getOrCreateDB(item, req.params.id)
        })
        findExsInDB(req.params.id, res)
        // res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error("error");
      });
  } catch (err) {
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
async function createOrFind(req,res){
  //console.log()
    let newbodyPart = '';
    //console.log(req.body.name, ",<---------req.body")
    Object.keys(exCat).forEach(e =>{
        if(req.body.category === exCat[e]){ 
        newbodyPart = e;
        }
    })
    try {
        const ex = await Excersice.findOne({name:req.body.name})
        //console.log("already created")
        //if the search comes with new null its crates the excercise in the model
        //its basically a get or create function
        if(!ex){
            const newEx = await Excersice.create(req.body)
            newEx.bodyPart= newbodyPart
            newEx.save();
            //console.log("new creation")
            res.status(201).json({workout:newEx})
            //console.log("res gone")
        }else{
            res.status(200).json({workout:ex})
        }
        
    } catch (err) {
        console.log("couldnt find or create one")
        return res.status(401).json(err);
        
    }
}

async function findSearch(req, res){
  const sea = exCat[req.params.bodyid];
  const lowerQ = req.params.qid.toLowerCase();
  console.log(req.params.qid)
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
        const newData = []
        //console.log(response.data.results)
         response.data.results.forEach((item,i) =>{
           if(item.name.toLowerCase().includes(lowerQ)){
            newData.push(item)
           }
           
         })
         console.log(newData)
        res.status(200).json(newData);
      })
      .catch(function (error) {
        console.error("error");
      });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function createNew(req,res){
  try {
    const newEx = await Excersice.find({name:req.body.name})
    console.log(newEx.length)
    if(newEx.length === 0){
      const newwwer = await Excersice.create(req.body)
      newwwer.save()
      console.log("new")
      res.status(200).json(newwwer);
    }
    res.status(200).json(newEx);
  } catch (error) {
    
  }
}






module.exports = {
  find,
  findImg,
  createOrFind,
  findSearch,
  createNew,
};
