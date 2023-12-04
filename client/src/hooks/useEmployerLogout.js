import { useEmployerContext } from "./useEmployerContext" 

export const useEmployerLogout = () => {
  const { dispatch } = useEmployerContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('employer')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}