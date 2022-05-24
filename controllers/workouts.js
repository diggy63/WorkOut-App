const Workout = require("../models/Workout");



async function create(req, res){
    console.log(req.body,"create")
    try {
        const newWorkout = await Workout.create(req.body)
        console.log(newWorkout)
        res.status(201).json({workout:newWorkout})
    } catch (err) {
        console.log("error");
        res.status(400).json(err);
    }
}

async function find(req,res){
    //console.log(req.params.id);
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
    console.log(req.params);
    // try {
    //     const WO = await Workout.findOne({_id:req.params.id});
    //     console.log(WO, "found workout")
    //     res.status(200).json({workout:WO})
    // } catch (err) {
    //     console.log("error in finding workout");
    //     res.status(400).json(err);
    // }

}


module.exports = {
    create,
    find,
    addEx,
  };