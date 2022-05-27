const Workout = require("../models/Workout");
const Excercise = require("../models/Excercise")



async function create(req, res){
    console.log(req.body,"create")
    try {
        const newWorkout = await Workout.create(req.body)
        console.log(newWorkout)
        res.status(201).json({workout:newWorkout})
    } catch (err) {
        console.log("error creating workout");
        res.status(400).json(err);
    }
}

async function find(req,res){
    //console.log("findin.........")
    try {
        const WO = await Workout.findOne({_id:req.params.id});
        //console.log(WO, "found workout")
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding workout");
        res.status(400).json(err);
    }

}
async function addEx(req,res){
    //console.log(req.body, '<------------req.body');

    try {
        const WO = await Workout.findOne({_id:req.params.wid})
        const ex = await Excercise.findOne({_id:req.params.eid})
        const newEx = {
            name:ex.name,
            description:ex.description,
            bodyPart:ex.bodyPart,
            order:(WO.excercises.length + 1),
        }
        WO.excercises.push(newEx)
        WO.save();
        res.status(201).json({workout:WO})
    } catch (err) {
        console.log("couldnt add excercise")
        res.status(400).json(err);
    }

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

 async function changeRepSet(req,res){
     console.log(req.body)
     const exChange = await Workout.findOne({'excercises._id':req.body.id}).then(function(workout){
         //console.log(workout)
        const ex = workout.excercises.id(req.body.id);
        ex.reps = req.body.reps
        ex.sets = req.body.sets
        temp = ex
        //ex.remove()
        //workout.excercises.push(temp);
        console.log(ex)
        workout.save().then(function(){
            console.log("save?")
            res.status(201).json({workout:workout})
        })
     })
 }

 async function changeWeight(req,res){
    console.log(req.body)
    const exChange = await Workout.findOne({'excercises._id':req.body.id}).then(function(workout){
        //console.log(workout)
       const ex = workout.excercises.id(req.body.id);
       ex.weight = req.body.weight
       //ex.remove()
       //workout.excercises.push(temp);
       console.log(ex)
       workout.save().then(function(){
           console.log("save?")
           res.status(201).json({workout:workout})
       })
    })
}

 async function track(req,res){
     //console.log(req.params)
     try {
         let newExcers = []
         const WO = await Workout.findById(req.params.id)
         console.log("old work out")
         WO.excercises.forEach((data,i) =>{
             newExcers[i] = {
                 name:data.name,
                 description:data.description,
                 reps:data.reps,
                 sets:data.sets,
                 bodyPart:data.bodyPart,

             }
             //console.log(data)
         })
         //console.log(WO)
         const newWorkout = {
             workoutName:WO.workoutName,
             description:WO.description,
             excercises:newExcers,
             userCompleted:req.user,

         }
         const newWo = await Workout.create(newWorkout)
         console.log(newWo)
         newWo.save()
         res.status(201).json({workout:newWo})
     } catch (err) {
        console.log("couldnt Create new Tracked Workout");
        res.status(400).json(err);
     }
 }



 async function getDone(req,res){
     console.log("here");
     try {
        const WO = await Workout.find({'userCompleted':req.user});
        console.log(WO)
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding done workout");
        res.status(400).json(err);
    }
 }





 async function findAllofOne(req,res){
     console.log("allofOne")
     console.log(req.user)
    console.log(req.params, "params")
    try {
        const WOName = await Workout.findById(req.params.id)
        //console.log(WOName.workoutName)
        const WO = await Workout.find({userCompleted:req.user, workoutName:WOName.workoutName});
        console.log(WO, "found workout")
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding workout");
        res.status(400).json(err);
    }

}

async function finddone(req,res){
    console.log("here")
}

async function deleteOne(req,res){
    //console.log(req.params)
    try {
        const WO = await Workout.findById(req.params.id)
        await WO.remove()
        res.status(200).json("removed")
    } catch (err) {
        console.log("couldnt Delete")
        res.status(400).json(err);
    }
}

async function search(req,res){
    console.log(req.params.id)
    try {
        const WO = await Workout.find({$text: {$search: req.params.id}})
        console.log(WO)
        res.status(200).json({WorkO:WO})
    } catch (err) {
        console.log("search not success full")
        res.status(400).json(err);
        
    }
}

module.exports = {
    create,
    find,
    addEx,
    getAll,
    changeRepSet,
    track,
    changeWeight,
    getDone,
    findAllofOne,
    finddone,
    deleteOne,
    search,
  };