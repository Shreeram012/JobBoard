import {createContext, useEffect, useReducer} from 'react'

export const EmployerContext=createContext()

export const employerReducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {employer:action.payload}
        case 'LOGOUT':
            return {employer:null}
        default :
            return state
    }
}

export const EmployerContextProvider=({children})=>{
    const [state, dispatch] = useReducer(employerReducer,{
        employer:null
    })

    useEffect(()=>{
        const employer=JSON.parse(localStorage.getItem('employer'))
        if(employer)
            dispatch({type:'LOGIN',payload:employer})
    },[])

    //console.log('EmployerContext state',state)

    return (
        <EmployerContext.Provider value={{...state,dispatch}}>
            {children}
        </EmployerContext.Provider>
    )
}