import { useState } from 'react'
import { useCandidateContext } from './useCandidateContext'

export const useCandidateLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useCandidateContext()

  const Clogin = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/candidate/login', {
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
      // save the user to local storage
      localStorage.setItem('candidate', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
  }

  return { Clogin, isLoading, error }
}