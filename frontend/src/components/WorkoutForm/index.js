import React from 'react'
import { Container, Title, Form, Label, Input, AddButton } from './styles'
const WorkoutForm = ({ formData, handleValueChange, handleSubmit }) => {
  const { title, reps, load } = formData
  return (
    <Container>
      <Title>Creat Workout</Title>
      <Form onSubmit={handleSubmit}>
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
        <Label>Exercise Load (Kgs)</Label>
        <Input
          type='number'
          name='load'
          value={load}
          placeholder='Load'
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
        <AddButton type='submit'>Add Exercise</AddButton>
      </Form>
    </Container>
  )
}
export default WorkoutForm
