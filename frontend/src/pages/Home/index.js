import React, { useEffect, useState } from 'react'
import { Container, CardContainer } from './styles'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutForm from '../../components/WorkoutForm'
import { ToastContainer, toast } from 'react-toastify'
import { useWorkoutsContext } from '../../hooks/useWorkoutsContext'

const Home = () => {
  const [formData, setFormData] = useState({ title: '', reps: 0, load: 0 })
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    fetchWorkouts()
  }, [])

  const fetchWorkouts = async () => {
    await fetch('http://localhost:4000/api/workouts')
      .then(res => res.json())
      .then(data => dispatch({ type: 'SET_WORKOUTS', payload: data }))
      .catch(err => {
        toast.error('Something went wrong')
        console.log('err: ', err)
      })
  }

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:4000/api/workouts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
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
  return (
    <Container>
      <CardContainer>
        {workouts &&
          workouts.map(workout => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </CardContainer>
      <WorkoutForm
        formData={formData}
        handleValueChange={handleValueChange}
        handleSubmit={handleSubmit}
      />
      <ToastContainer />
    </Container>
  )
}
export default Home
