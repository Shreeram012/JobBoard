import { useState } from "react"
import axios from 'axios'
import { useCandidateContext } from "../hooks/useCandidateContext";
import { useParams } from "react-router-dom";

function getBase64(file) {
    return new Promise((resolve,reject)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
          };
        reader.onerror = function (error) {
            reject(error);
          };
    })
}

const Apply=()=>{

    const {candidate}=useCandidateContext()
    const [resume,setResume]=useState();
    const [about,setAbout]=useState('')
    const {jid}=useParams()

    const handleChange=async(e)=>{
        //console.log(e.target.files[0])
        setResume(await getBase64(e.target.files[0]))

    }

    //console.log(resume)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const data=await axios.post('http://localhost:4000/api/candidate/apply',{candidate:candidate.username,jid,about,resume})
            console.log(data)
        }
        catch(err){
            console.log(err)
        }

    }


    return (
        <div>
            <h1 className="m-5">Apply</h1>
            <h4 className="mx-5">JobID:{jid}</h4>
            <form onSubmit={handleSubmit} className="form bg-white m-5 w-75">
            <input placeholder='About...' className='form-control mb-3' type="text" onChange={(e)=>{setAbout(e.target.value)}}/>
            <input type="file" onChange={handleChange} className="form-control mb-3"/>
            <button type="submit" className="btn btn-dark">Apply</button>
            </form>
        </div>
    )
}

export default Apply