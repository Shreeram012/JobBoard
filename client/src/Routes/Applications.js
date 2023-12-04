import { useEffect, useState } from "react";
import { useEmployerContext } from "../hooks/useEmployerContext";



const Applications=()=>{
    const {employer}=useEmployerContext()
    const [applications,setApplications]=useState([])
    const sendMail=async(id)=>{
            const response = await fetch('/api/employer/accept', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                            'Authorization': `Bearer ${employer.token}`},
                body:JSON.stringify({employer:employer.username,
                    aid:id,
                    role:""})})
        const json= await response.json()
        if(response.ok)
        {
            console.log(json)
        }
        else{
            console.log('error')
        }
        }

    const downloadPDF=(pdf,name)=> {
        const linkSource = pdf;
        const downloadLink = document.createElement("a");
        const fileName = name;
    
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    useEffect(()=>{
        if(employer){
        const fetchapps=async()=>{
            const response = await fetch('/api/employer/applications', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json',
                                'Authorization': `Bearer ${employer.token}`}})
            const json= await response.json()
            if(response.ok)
            {
                //console.log(json.application)
                setApplications(json.application)
            }
            else{
                console.log(response)
            }
        }
        fetchapps();
    }},[employer])


    const appEle=applications.map(app=>{
        return(
            <tr key={app._id}>
                <td>{app._id}</td>
                <td><button className="btn" onClick={()=>{downloadPDF(app.resume,app._id)}}>Download Resume</button></td>
                <td><button className="btn btn-success" onClick={()=>{sendMail(app._id)}}>Accept</button></td>
            </tr>
        )
    })
    return(
        <div className="bg-light" style={{minHeight:'500px'}}>
            <h1>All applications</h1>
            <table className="table w-50">
                <thead>
                    <tr>
                        <th>Application ID</th>
                        <th>Resume</th>
                    </tr></thead>
                <tbody>
                {appEle}
                </tbody>
            </table>
        </div>
    )
}

export default Applications