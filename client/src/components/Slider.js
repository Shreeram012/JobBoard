import {Row,Col,Image,Button} from 'react-bootstrap'
import cover from './images/—Pngtree—man search for hiring job_7579804.png'

const Slider=()=>{
    return (
        <div className="bg-dom border-bottom border-black border-3" style={{height:'550px'}}>
            <Row data-bs-them="dark" className='mw-100 h-100'>
            <Col className="text-light" style={{position:'relative',left:'75px',top:'150px'}} sm={6}>
                <h2><span>100</span>+ Jobs posted</h2>
                <h1 style={{fontSize:'65px'}}>Find your dream job</h1>
                <Button style={{backgroundColor:'#29ADB2',marginTop:'10px',border:'none'}} ><p className='m-auto fs-2 object-fit-scale'>Upload your resume</p></Button>
            </Col>
            <Col className="d-lg-block d-none position-relative"><Image src={cover} fluid sm={2} className='position-absolute bottom-0' style={{}}></Image></Col>
            </Row>
        </div>
    )
}

export default Slider;