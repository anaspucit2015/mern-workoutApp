import React, { useState } from 'react'
import SignupForm from '../../components/SignupForm'
import { toast } from 'react-toastify'
import { useAuthContext } from '../../hooks/useAuthContext'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { dispatch } = useAuthContext()

  const handleValueChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_APP_URL}/api/user`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => res.json())
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
    <SignupForm
      isLogin={true}
      formData={formData}
      handleSubmit={handleSubmit}
      handleValueChange={handleValueChange}
    />
  )
}
export default Login
