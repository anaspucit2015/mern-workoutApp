import React, { useEffect, useState } from 'react'
import { Container, CardContainer } from './styles'
import WorkoutDetails from '../../components/WorkoutDetails'
import WorkoutForm from '../../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)
  const [formData, setFormData] = useState({ title: '', reps: 0, load: 0 })

  useEffect(() => {
    const fetchWorkouts = async () => {
      const data = await fetch('http://localhost:4000/api/workouts')
        .then(res => res.json())
        .then(data => data)

      setWorkouts(data)
    }
    fetchWorkouts()
  }, [])

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }
  return (
    <Container>
      <CardContainer>
        {workouts &&
          workouts.map(workout => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </CardContainer>
      <WorkoutForm formData={formData} handleValueChange={handleValueChange}/>
    </Container>
  )
}
export default Home
