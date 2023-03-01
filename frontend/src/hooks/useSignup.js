import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { toast } from 'react-toastify'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (formData, callback) => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_APP_URL}/api/user/signup`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => res.json())
      if (res.error) {
        setError(res.error)
        setIsLoading(false)
        throw res.error
      }
      if (res.email) {
        localStorage.setItem('user', JSON.stringify(res))
        dispatch({ type: 'LOGIN', payload: res })
        toast.success('User Added and Loggedin succesfully')
        callback()
        setIsLoading(false)
      }
    } catch (err) {
      toast.error(err)
    }
  }
  return { signup, isLoading, error }
}
