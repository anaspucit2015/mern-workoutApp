import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { login, isLoading } = useLogin()

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await login(formData, clearForm)
  }
  const clearForm = () => {
    setFormData({ email: '', password: '' })
  }
  return (
    <SignupForm
      isLogin={true}
      formData={formData}
      handleSubmit={handleSubmit}
      handleValueChange={handleValueChange}
      loading={isLoading}
    />
  )
}
export default Login
