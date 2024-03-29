const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

const getAllWorkouts = async (req, res) => {
  try {
    const {
      user: { _id }
    } = req
    const workouts = await Workout.find({ user: _id }).sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (err) {
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
  let emptyFields = []
  if (!title) emptyFields.push('title')
  if (!reps) emptyFields.push('reps')
  if (!load) emptyFields.push('load')

  if (emptyFields.length > 0) {
    res
      .status(400)
      .json({ error: 'Please Fill in all the Fields', emptyFields })
  }
  try {
    const {
      user: { _id }
    } = req
    const workout = await Workout.create({ title, reps, load, user: _id })
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
