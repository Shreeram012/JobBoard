import { useEffect, useState } from "react"
import { useEmployerContext } from "../hooks/useEmployerContext"
import { Button } from "react-bootstrap"

const MyJobs=()=>{
    const {employer}=useEmployerContext()
    const [myJobs,setMyJobs]=useState([])
    //console.log(employer)
    useEffect(()=>{
        const fetchMyJobs=async()=>{
            if(employer){
            const response = await fetch('/api/employer/jobs', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json',
                                'Authorization': `Bearer ${employer.token}`}})
            const json= await response.json()
            if(response.ok)
            {
                //console.log(json)
                setMyJobs(json)
            }
            else{
                console.log(response)
            }
        }
    }
    fetchMyJobs()},[employer])

    const jobsEle=myJobs.map(job=>{
        return (        <div className="col-md-8 w-100 p-4 my-4 bg-light d-lg-flex justify-content-between me-5" style={{border:'none'}}>
        <div className="d-lg-flex d-block">
        <div className="ms-5">
            <a href="#" className="text-decoration-none fs-3 text-dark">{job.title}</a>
            <div className="d-lg-flex d-block gap-5  opacity-75 mt-2">
                <p><i className="fa fa-map-marker"></i> {job.location}</p>
                <p><i className="fa fa-clock"></i> {job.type?"Part-time":"Full-time"}</p></div>
        </div>
        </div>
        <Button href={`/${job._id}/applications`} className="fs-4 bg-sub align-self-center text-nowrap" style={{border:'none'}}>See applications</Button>
    </div>)
    })
    return (
        <div className="col-md-8 rounded p-5 justify-content-md-center">
        <p className="fs-3">MyJobs</p>
        <div className="row">
            <div className="row ps-5">
            {jobsEle}
            </div>
        </div>
    </div>
    )
}

export default MyJobs