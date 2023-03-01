import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { toast } from 'react-toastify'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (formData, callback) => {
    try {
      setIsLoading(true)
      setError(null)
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_APP_URL}/api/user/login`,
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => res.json())
      if (res.error) {
        setIsLoading(false)
        setError(res.error)
        throw res.error
      }
      if (res.email) {
        localStorage.setItem('user', JSON.stringify(res))
        dispatch({ type: 'LOGIN', payload: res })
        toast.success('User Loggedin succesfully')
        callback()
        setIsLoading(false)
      }
    } catch (err) {
      toast.error(err)
      return err
    }
  }
  return { login, isLoading, error }
}
