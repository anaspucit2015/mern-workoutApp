import React from 'react'
import { Container, Title, Form, Label, Input } from './styles'
const WorkoutForm = ({ formData, handleValueChange }) => {
  const { title, reps, load } = formData
  return (
    <Container>
      <Title>Creat Workout</Title>
      <Form>
        <Label>Exercise Title</Label>
        <Input
          type='text'
          name='title'
          value={title}
          placeholder='Title'
          onChange={({ target: { name, value } }) =>
            handleValueChange(name, value)
          }
        />
        <Label>Exercise Reps</Label>
        <Input
          type='number'
          name='reps'
          value={reps}
          placeholder='Reps'
          onChange={({ target: { name, value } }) =>
            handleValueChange(name, value)
          }
        />
        <Label>Exercise Title</Label>
        <Input
          type='number'
          name='load'
          value={load}
          placeholder='Load'
          onChange={({ target: { name, value } }) =>
            handleValueChange(name, value)
          }
        />
      </Form>
    </Container>
  )
}
export default WorkoutForm
