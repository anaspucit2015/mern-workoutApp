const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (err) {
    console.log('err: ', err);
    res.status(400).json({ error: err.message })
  }
}

const getWorkout = async (req, res) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    const workout = await Workout.findById(id)

    if (!workout) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    const workout = await Workout.findByIdAndDelete({ _id: id })

    if (!workout) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const updateWorkout = async (req, res) => {
  const { id } = req.params
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    )

    if (!workout) {
      return res.status(404).json({ error: 'No such Workout' })
    }

    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}
