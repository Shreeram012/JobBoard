const CandidateDashboard=()=>{
    return (
        <div className="bg-dom" style={{height:'500px'}}>
        <div className="d-lg-flex d-block justify-content-around">
        <a href='/joblist' className="btn btn-success btn-lg m-5 fs-1">Apply for jobs<i className="fa fa-edit"></i></a>            
        <button className="btn btn-warning btn-lg m-5 fs-1">Edit profile <i className="fa fa-edit"></i></button>
        <button className="btn btn-danger btn-lg fs-1 m-5">Applications Status<i className="fa fa-clipboard"></i></button>
        </div>
        </div>
    )
}

export default CandidateDashboard