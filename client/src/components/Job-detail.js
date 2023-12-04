import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import comp from './images/comp.jpg'

const JobDetails=()=>{
    const {jid}=useParams()

    const [job,setJob]=useState({error:"ERR:Job not found"})

    useEffect(()=>{
        const fetchDetails=async()=>{
            const response= await fetch(`/api/jobs/${jid}`)
            const json= await response.json()
            if(response.ok)
            {
                setJob(()=>json)
            }
            else{
                console.log('error')
            }
        }
        fetchDetails()
    },[])

    return (
        <div className="">
            <div className="bg-dom p-5 row" style={{'height':'750px'}}>
                <h1 style={{color:'white'}}>Job details</h1>
            <div className="col"><img src={comp} alt='logo' style={{height:'250px'}}/></div>
            {job.error && job.error}
            <h2>{job.title}</h2>
            <h4>Location:{job.location}</h4>
            <h5>Type:{job.type?"Part":"Full"}-time</h5>
            <p>{job.description}</p>
            <p>Last date to apply:{job.lastDate}</p>
            <form action={`/${jid}/apply`} >          <button className="btn bg-sub">Apply</button></form>
            </div>

        </div>
    )
}

export default JobDetails;