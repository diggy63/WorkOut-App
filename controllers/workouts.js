const Workout = require("../models/Workout");
const Excercise = require("../models/Excercise")



async function create(req, res){
    //console.log(req.body,"create")
    try {
        const newWorkout = await Workout.create(req.body)
        //console.log(newWorkout)
        res.status(201).json({workout:newWorkout})
    } catch (err) {
        console.log("error creating workout");
        res.status(400).json(err);
    }
}

async function find(req,res){
    try {
        const WO = await Workout.findOne({_id:req.params.id});
        console.log(WO, "found workout")
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding workout");
        res.status(400).json(err);
    }

}
async function addEx(req,res){
    //console.log("adding.......");

    try {
        const WO = await Workout.findOne({_id:req.params.wid})
        const ex = await Excercise.findOne({_id:req.params.eid})
        WO.excercises.push(ex)
        //console.log(WO)
        WO.save();
        res.status(201).json({workout:WO})
        //console.log(WO.excercises, "excercises");
    } catch (err) {
        console.log("couldnt add excercise")
    }
    // WO.excercises.push(ex);
    // WO.save();
    // console.log(WO)
    // try {
    //     const WO = await Workout.findOne({_id:req.params.id});
    //     console.log(WO, "found workout")
    //     res.status(200).json({workout:WO})
    // } catch (err) {
    //     console.log("error in finding workout");
    //     res.status(400).json(err);
    // }

}
 async function getAll(req,res){
     //console.log("in get all workouts controller")
     try {
         const allWO = await Workout.find({});
         //console.log(allWO)
         res.status(200).json({workout:allWO})
     } catch (err) {
        console.log("error in finding all workout");
        res.status(400).json(err);
     }
 }

module.exports = {
    create,
    find,
    addEx,
    getAll
  };