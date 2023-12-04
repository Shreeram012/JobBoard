import { useState } from "react";
import { useEmployerContext } from "../hooks/useEmployerContext";
import {locations} from '../data/locations'
import { Navigate, Redirect } from "react-router-dom";

const PostJob=(props)=>{

    

    const locEle=locations.map(loc=>{
        return (
            <option value={loc}>{loc}</option>
        )
    })


    const [title,setTitle]=useState('')
    const [desc,setDesc]=useState('')
    const [type,setType]=useState(true)
    const [location,setLocation]=useState('Remote')
    const [lastDate,setLastDate]=useState(null)

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {employer}=useEmployerContext()

    const change=()=>{
        if(employer===null){
            alert(`login to continue!`)
            window.location.replace('http://localhost:3000/employer/login')
        }
    }

    const post=async(e)=>{
        setIsLoading(true)
        const username=employer.username
        const response = await fetch('/api/employer/create-job', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
                        'Authorization': `Bearer ${employer.token}`},
            body: JSON.stringify({ title,desc,type,location,lastDate})
          })
          const json = await response.json()

          if(!response.ok){
            setError(json.error)
            setIsLoading(false)
          }
          if(response.ok){
            setError(null)
            setIsLoading(false)
          }
    }

    return(
        <div className="post bg-dom d-flex justify-content-center">
                <form onSubmit={post} onChange={change} className="w-50 bg-light rounded p-5 m-5 shadow">
                    <h3>Enter job details</h3>
            
                <label className="form-label" htmlFor='title'>Title</label>
                <input 
                    className="form-control"
                    id='title'
                    type="text"
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}            
                />
                <label className="form-label" htmlFor='desc'>Description</label>
                <textarea
                    id='desc' 
                    className="form-control"
                    value={desc}
                    onChange={(e)=>{setDesc(e.target.value)}}            
                />

                <label htmlFor='location' className="form-label">Location</label>
                <select id='location' class="form-select" onChange={(e)=>setLocation(e.target.value)}>
                <option selected>Select location</option>
                <option value="remote">Remote</option>
                {locEle}
                </select>

                <label htmlFor="type" className="form-label">Type</label>
                <select id="type" class="form-select" onChange={(e)=>setType(e.target.value)}>
                    <option selected>Select Job type</option>
                    <option value={true}>Part-time</option>
                    <option value={false}>Full-time</option>
                </select>

                <label htmlFor="ld" className="form-label">Last date to apply</label>
                <input type="date" id="ld" className="form-control" onChange={(e)=>setLastDate(e.target.value)}></input>

                <div className="d-grid"><button disabled={isLoading} className="mt-3 btn btn-sub bg-sub">Post</button></div>
                {error && <div className="text-danger fw-bold">{error}</div>}
            </form>
        </div>
    )
}

export default PostJob;