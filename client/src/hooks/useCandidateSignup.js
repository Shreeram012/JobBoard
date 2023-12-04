import { useState } from "react"
import { useCandidateContext } from "./useCandidateContext"

export const useCandidateSignup=()=>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useCandidateContext()

    const signup = async (username, password,fullName,email) => {
        console.log(username, password,fullName,email)
        setIsLoading(true)
        setError(null)
    
        const response = await fetch('/api/candidate/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ username, password,fullName,email })
        })
        const json = await response.json()
    
        if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
        }
        if (response.ok) {
          localStorage.setItem('candidate', JSON.stringify(json))
    
          dispatch({type: 'LOGIN', payload: json})
    
          setIsLoading(false)
        }
      }
    
      return { signup, isLoading, error }

}