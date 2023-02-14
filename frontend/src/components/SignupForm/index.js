import React from 'react'
import { Container, Title, Label, Input, AddButton, Form } from './styles'

const SignupForm = ({ isLogin, formData, handleSubmit, handleValueChange }) => {
  const { email, password } = formData
  return (
    <Container>
      <Title>{isLogin ? 'Log in' : 'Sign up'}</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type='text'
          name='email'
          value={email}
          placeholder='email'
          onChange={({ target: { name, value } }) =>
            handleValueChange(name, value)
          }
        />
        <Label>Password</Label>
        <Input
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={({ target: { name, value } }) =>
            handleValueChange(name, value)
          }
        />
        <AddButton type='submit'>{isLogin ? 'Log in' : 'Sign up'}</AddButton>
      </Form>
    </Container>
  )
}
export default SignupForm
