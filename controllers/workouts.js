const Workout = require("../models/Workout");
const Excercise = require("../models/Excercise")



async function create(req, res){
    try {
        const newWorkout = await Workout.create(req.body)
        res.status(201).json({workout:newWorkout})
    } catch (err) {
        console.log("error creating workout");
        res.status(400).json(err);
    }
}

async function find(req,res){
    try {
        const WO = await Workout.findOne({_id:req.params.id});
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding workout");
        res.status(400).json(err);
    }

}
//embbeds excercise into the workout model
async function addEx(req,res){
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
     try {
         await Workout.find({}).sort({createdAt: 'desc'}).exec(function(err,workouts){
            res.status(200).json({workout:workouts})
         });
         
     } catch (err) {
        console.log("error in finding all workout");
        res.status(400).json(err);
     }
 }

 //changes rep and sets in a workout you are creating
 async function changeRepSet(req,res){
     const exChange = await Workout.findOne({'excercises._id':req.body.id}).then(function(workout){
        const ex = workout.excercises.id(req.body.id);
        ex.reps = req.body.reps
        ex.sets = req.body.sets
        workout.save().then(function(){
            res.status(201).json({workout:workout})
        })
     })
 }

 //changes weight in the tracked app
 async function changeWeight(req,res){
    const exChange = await Workout.findOne({'excercises._id':req.body.id}).then(function(workout){
       const ex = workout.excercises.id(req.body.id);
       ex.weight = req.body.weight
       workout.save().then(function(){
           console.log("saved")
           res.status(201).json({workout:workout})
       })
    })
}
//Create new instance of work and also new ids for the embbed excercises so that they can be track indvidually
 async function track(req,res){
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
         })
         const newWorkout = {
             workoutName:WO.workoutName,
             description:WO.description,
             excercises:newExcers,
             userCompleted:req.user,

         }
         const newWo = await Workout.create(newWorkout)
         newWo.save()
         res.status(201).json({workout:newWo})
     } catch (err) {
        console.log("couldnt Create new Tracked Workout");
        res.status(400).json(err);
     }
 }



 async function getDone(req,res){
     try {
        await Workout.find({'userCompleted':req.user}).sort({createdAt: 'desc'}).exec(function(err,workouts){
        res.status(200).json({workout:workouts})
        })
    } catch (err) {
        console.log("error in finding done workout");
        res.status(400).json(err);
    }
 }





 async function findAllofOne(req,res){
    try {
        const WOName = await Workout.findById(req.params.id)
        const WO = await Workout.find({userCompleted:req.user, workoutName:WOName.workoutName});
        console.log("found workout")
        res.status(200).json({workout:WO})
    } catch (err) {
        console.log("error in finding workout");
        res.status(400).json(err);
    }

}


async function deleteOne(req,res){
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
    try {
        //searchs for text that matchs the qeuery
        const WO = await Workout.find({$text: {$search: req.params.id}})
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
    deleteOne,
    search,
  };