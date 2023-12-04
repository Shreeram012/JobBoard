import { Button, Card,Image } from "react-bootstrap";

const Popular=()=>{

    const cats=["Design & Creative","Marketing" ,"Telemarketing","Software & Web","Administration","Teaching & Education"]

    const comps=[{name:"Techgaming",location:"Banglore,India",type:"part-time"},{name:"XYZ",location:"New Delhi,India",type:"part-time"},{name:"Softech",location:"Banglore,India",type:"part-time"},{name:"Code0",location:"Remote",type:"full-time"}]

    const catEle=cats.map((cat,index)=>{
        return (
            <div className="col-md-4" key={index}>
                <Card className="p-4 my-4 h-75" style={{border:'none'}}>
                    <Card.Title><a href="#" className="text-decoration-none fs-3 text-sub">{cat}</a></Card.Title>
                    <Card.Subtitle className="mt-3"><span className="fs-5 text-dom p-1 me-1 bg-foot bg-opacity-25">50+</span> jobs available</Card.Subtitle>
                </Card>
            </div>
        )
    })

    const compEle=comps.map((comp,index)=>{
        return (
            <div className="col-md-5 p-4 my-4 bg-light d-flex justify-content-between me-5" style={{border:'none'}} key={index}>
                <div className="d-lg-flex d-block">
                <Image src="comp.jpg" height={'100px'} width={'100px'}/>
                <div className="ms-5">
                    <a href="#" className="text-decoration-none fs-3 text-dark">{comp.name}</a>
                    <div className="d-lg-flex d-block gap-5  opacity-75 mt-2">
                        <p><i className="fa fa-map-marker"></i> {comp.location}</p>
                        <p><i className="fa fa-clock"></i> {comp.type}</p></div>
                </div>
                </div>
                <Button className="bg-sub h-50 align-self-center text-nowrap" style={{border:'none'}}>Apply now</Button>
            </div>
        )
    })

    return(
        <div className="bg-minor">
            <div className="ms-5 pt-5 px-5"><p className="fs-1">Popular Catagories</p></div>
            <div className="row mx-5 ps-5" style={{maxWidth:'100%'}}>
                {catEle}
            </div>

            <div className="ms-5 pt-5 px-5"><p className="fs-1">Top Hirers</p></div>
            <div className="row mx-5 ps-5">
                {compEle}
            </div>
        </div>
    )
} 

export default Popular;