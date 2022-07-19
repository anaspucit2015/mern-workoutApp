import React, { useEffect, useState } from 'react'
import { Title } from './styles'

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const data = await fetch('http://localhost:4000/api/workouts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(data => data)
      console.log('data: ', data);
    }
    fetchWorkouts();
  }, [])
  return <Title>Home</Title>
}
export default Home
