import { Button } from "react-bootstrap"

const EmployerDashboard=()=>{

    return (
        <div className="bg-dom" style={{height:'500px'}}>
            <div className="d-lg-flex d-block justify-content-around">
            <button className="btn btn-warning btn-lg m-5 fs-1">Edit profile <i className="fa fa-edit"></i></button>
            <button className="btn btn-danger btn-lg fs-1 m-5">Show applications <i className="fa fa-clipboard"></i></button>
            <a className="btn btn-success btn-lg fs-1 m-5" href="/employer/jobs">Jobs posted <i className="fa fa-clipboard"></i></a>
        </div>
        </div>
    )
}

export default EmployerDashboard