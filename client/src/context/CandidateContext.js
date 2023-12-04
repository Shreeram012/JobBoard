import {createContext, useEffect, useReducer} from 'react'

export const CandidateContext=createContext()

export const candidateReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {candidate:action.payload}
        case 'LOGOUT':
            return {candidate:null}
        default :
            return state
    }
}

export const CandidateContextProvider=({children})=>{
    const [state, dispatch] = useReducer(candidateReducer,{
        candidate:null
    })

    useEffect(()=>{
        const candidate=JSON.parse(localStorage.getItem('candidate'))
        if(candidate)
            dispatch({type:'LOGIN',payload:candidate})
    },[])

    //console.log('CandidateContext state',state)

    return (
        <CandidateContext.Provider value={{...state,dispatch}}>
            {children}
        </CandidateContext.Provider>
    )
}