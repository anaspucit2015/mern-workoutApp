import React from 'react'
import { Card, Title, Tab, Option, Value, Delete } from './styles'
const WorkoutDetails = ({ workout, handleDelete }) =>{
  const { title, load, reps, _id } = workout
  return(
    <Card>
      <Delete onClick={()=> handleDelete(_id) }>X</Delete>
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