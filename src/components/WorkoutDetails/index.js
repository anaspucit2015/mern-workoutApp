import React from 'react'
import { Card, Title, Tab, Option, Value } from './styles'
const WorkoutDetails = ({ workout }) =>{
  const { title, load, reps } = workout
  return(
    <Card>
      <Title>{title}</Title>
      <Tab>
        <Option>Load</Option>
        <Value>{load}</Value>
      </Tab>
      <Tab>
        <Option>Reps</Option>
        <Value>{reps}</Value>
      </Tab>
    </Card>
  )
}
export default WorkoutDetails