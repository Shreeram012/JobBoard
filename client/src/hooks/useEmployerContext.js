import { EmployerContext } from "../context/EmployerContext" 
import { useContext } from "react"

export const useEmployerContext = () => {
  const context = useContext(EmployerContext)

  if(!context) {
    throw Error('useEmployerContext must be used inside an EmployerContextProvider')
  }

  return context
}