import { useState } from 'react'
import { useEmployerContext } from './useEmployerContext'

export const useEmployerSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useEmployerContext()

  const signup = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/employer/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('employer', JSON.stringify(json))

      dispatch({type: 'LOGIN', payload: json})

      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}