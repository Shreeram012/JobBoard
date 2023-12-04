import { useState } from "react"

function downloadPDF(pdf) {
    const linkSource = pdf;
    const downloadLink = document.createElement("a");
    const fileName = "file.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
}

const GetApp=()=>{
    const [app,setApp]=useState({application:{resume:''}})


    const get=async()=>{
        const response= await fetch("/api/employer/applications")
        const json= await response.json()
        if(response.ok)
        {
            setApp(json)
            downloadPDF(app.application.resume)
        }
        else{
            console.log('error')
        }
    }

    console.log(app.application.resume)

    return(
        <div>
            <button onClick={get}>get</button>
        </div>
    )
}

export default GetApp