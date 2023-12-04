import { useContext } from "react"
import { CandidateContext } from "../context/CandidateContext"

export const useCandidateContext=()=>{
    const context=useContext(CandidateContext)
    if(!context) {
        throw Error('useCandidateContext must be used inside an CandidateContextProvider')
      }
    
      return context
} 