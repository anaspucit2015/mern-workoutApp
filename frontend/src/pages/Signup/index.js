import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { signup, isloading } = useSignup()

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await signup(formData, clearForm)
  }
  const clearForm = () => {
    setFormData({ email: '', password: '' })
  }
  return (
    <SignupForm
      formData={formData}
      handleSubmit={handleSubmit}
      handleValueChange={handleValueChange}
      loading={isloading}
    />
  )
}
export default Signup
