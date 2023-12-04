import { useEffect, useState } from "react";
import { Button, Form, Image, OverlayTrigger, Tooltip } from "react-bootstrap";

const Jobs= ()=>{

    const defjobs=[{_id:"1",title:"Software developer",employername:"WXYZ",location:"Banglore",type:true}]

    const [jobs,setJobs]=useState(defjobs)
    const steps=10000
    const [salRange,setSalRange]=useState(0)
        
    let ele=salRange
    if(salRange>=100000)
        ele=`${salRange/100000}L`

    const tt=(<Tooltip>
            {ele} INR.
        </Tooltip>
      )

    useEffect(()=>{
        const fetchJobs=async(location,catagory)=>{
            const response= await fetch("/api/jobs/joblist")
            const dbjobsjson= await response.json()
            if(response.ok)
            {
                //console.log(dbjobsjson[0])
                setJobs(prevJobs=>{
                    return [...defjobs,...dbjobsjson]
                })
            }
            else{
                console.log('error')
            }
        }
        fetchJobs(null,null)
    },[])


    const jobEle=jobs.map(job=>{
        return (
            <div className="col-md-8 w-100 p-4 my-4 bg-light d-lg-flex justify-content-between me-5" style={{border:'none'}}>
                <div className="d-lg-flex d-block">
                <Image src="comp.jpg" height={'100px'} width={'100px'}/>
                <div className="ms-5">
                    <a href="#" className="text-decoration-none fs-3 text-dark">{job.title}</a>
                    <p>{job.employername}</p>
                    <div className="d-lg-flex d-block gap-5  opacity-75 mt-2">
                        <p><i className="fa fa-map-marker"></i> {job.location}</p>
                        <p><i className="fa fa-clock"></i> {job.type?"Part-time":"Full-time"}</p></div>
                </div>
                </div>
                <Button href={`/${job._id}/details`} className="fs-4 bg-sub align-self-center text-nowrap" style={{border:'none'}}>See details</Button>
            </div>
        )
    })

    return(
        <div className="row bg-minor p-5 mx-auto justify-content-md-center gap-4">
            <div className="col-md-3 bg-light rounded p-5">
                <p className="fs-3">Filters</p>
                <Form className="row gap-4">
                    <Form.Select size="lg">
                        <option>Select location</option>
                        <option value="bang">Banglore</option>
                    </Form.Select>
                    <Form.Select size="lg">
                        <option>Select Catagory</option>
                        <option value="bang">Web developer</option>
                    </Form.Select>
                    <Form.Select size="lg">
                        <option>Select Experience</option>
                        <option value="bang">2-4</option>
                    </Form.Select>
                    <Form.Label className="fs-5">Salary:</Form.Label>

                    <OverlayTrigger
                        placement="bottom"
                        overlay={tt}
                        >
                        {({ ref, ...triggerHandler }) => (
                            <Button className="bg-light" {...triggerHandler}><Form.Range min='0' max={steps*100} step={steps} value={salRange} onChange={(e)=>setSalRange(e.target.value)} ref={ref}/> </Button>
                        )}
                        </OverlayTrigger>



                    <Button type="submit" className="fw-bold">Search</Button>
                </Form>
            </div>

            <div className="col-md-8 rounded p-5 justify-content-md-center">
                <p className="fs-3">Jobs</p>
                <div className="row">
                    <div className="row ps-5">
                    {jobEle}
                    </div>
                </div>
            </div>
        </div>
    )
}

/**                <Pagination>
                    <Pagination.Item key={1} active={1}>1</Pagination.Item>
                    <Pagination.Item key={2}>2</Pagination.Item>
                    <Pagination.Item key={3}>3</Pagination.Item>
                </Pagination> */

export default Jobs;