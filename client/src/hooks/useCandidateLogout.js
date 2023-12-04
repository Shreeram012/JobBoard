import { useCandidateContext } from "./useCandidateContext"

export const useCandidateLogout = () => {
  const { dispatch } = useCandidateContext()

  const candidatelogout = () => {
    localStorage.removeItem('candidate')

    dispatch({ type: 'LOGOUT' })
  }

  return { candidatelogout }
}