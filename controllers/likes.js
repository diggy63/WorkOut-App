const Workout = require("../models/Workout")


async function createOne(req,res){
    console.log(req.params);
    try {
        const workout = await Workout.findById(req.params.id)
        workout.likes.push({username: req.user.username, userId: req.user._id})
        await workout.save()
        res.status(201).json({data: 'like added'})
        
    } catch (err) {
        console.log("couldnt make like")
        res.status(400).json({err})
    }
}

async function deleteOne(req,res){
    console.log(req.user)
    try {
        const workout = await Workout.findOne({'likes._id': req.params.id, 'likes.username': req.user.username})
        workout.likes.remove(req.params.id)
        console.log(workout.likes)
        await workout.save()
        res.status(201).json({data: 'like removed'})
    } catch (err) {
        console.log("error")
        res.status(400).json({err})
    }
}

//dont know if this should be in the Workout constroller but it search for all the workouts that are liked by an indivudal
async function findAll(req,res){
    try {
        const workout = await Workout.find({'likes.username': req.user.username})
        res.status(200).json({workouts: workout})
    } catch (err) {
        res.status(400).json({err})
    }
}




module.exports = {
    createOne,
    deleteOne,
    findAll,
  };
  