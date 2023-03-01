import React, { useEffect, useState } from 'react'
import { Container, CardContainer } from './styles'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutForm from '../../components/WorkoutForm'
import { toast } from 'react-toastify'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'

const Home = () => {
  const [formData, setFormData] = useState({ title: '', reps: 0, load: 0 })
  const { workouts, dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()
  const extraOptions = {
    withCredentials: true,
    credentials: 'include',
    mode: 'cors'
  }

  useEffect(() => {
    const fetchWorkouts = async () => {
      await axios
        .get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/workouts`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          }
        })
        .then(res => dispatch({ type: 'SET_WORKOUTS', payload: res.data }))
        .catch(err => {
          toast.error('Something went wrong')
        })
    }
    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if(!user){
        throw Error('You must login first')
      }
      const res = await axios
        .post(
          `${process.env.REACT_APP_BACKEND_APP_URL}/api/workouts`,
          JSON.stringify(formData),
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              'Content-Type': 'application/json'
            }
          }
        )
        .then(res => res.data)
      if (res.error) {
        throw res.error
      }
      toast.success('Workout added')
      setFormData({ title: '', reps: 0, load: 0 })
      dispatch({ type: 'CREATE_WORKOUT', payload: res })
    } catch (err) {
      toast.error(err)
    }
  }
  const handleDelete = async id => {
    try {
      if(!user){
        throw Error('You must login first')
      }
      const res = await axios
        .delete(`${process.env.REACT_APP_BACKEND_APP_URL}/api/workouts/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
          }
        })
        .then(res => res.data)
      if (res._id) {
        dispatch({ type: 'DELETE_WORKOUT', payload: res })
        toast.success(`${res.title} is Deleted Successfully.`)
      }
    } catch (err) {
      toast.error(err)
    }
  }
  return (
    <Container>
      <CardContainer>
        {workouts &&
          workouts.map(workout => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
              handleDelete={handleDelete}
            />
          ))}
      </CardContainer>
      <WorkoutForm
        formData={formData}
        handleValueChange={handleValueChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}
export default Home
