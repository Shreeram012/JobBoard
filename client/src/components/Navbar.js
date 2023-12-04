//const { Link } = require("react-router-dom")
import logo from './images/active-search-2-128.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button,Image} from 'react-bootstrap'
import { useEmployerLogout } from '../hooks/useEmployerLogout';
import { useEmployerContext } from '../hooks/useEmployerContext';
import { useCandidateContext } from '../hooks/useCandidateContext';
import { useCandidateLogout } from '../hooks/useCandidateLogout';

const Navigationbar=()=>{

    const {logout} = useEmployerLogout()
    const {employer}= useEmployerContext()

    const {candidatelogout}=useCandidateLogout()
    const {candidate}=useCandidateContext()
    
    const handleClick=()=>{
        logout()
    }

    const handleCandidateLogout=()=>{
      candidatelogout()
    }

    return (
        <Navbar expand="lg" data-bs-theme="dark" bg="dom" sticky='top' className='shadow'>
        <Container>
          <Navbar.Brand href="/" style={{display:'flex',alignItems:'center',marginBottom:'10px'}}><Image src={logo} fluid style={{height: '60px'}} ></Image><h1 style={{color: '#29ADB2',marginLeft:'10px'}}>Job board</h1></Navbar.Brand>
        </Container>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="fs-5">
                {!employer && <Nav.Link href="/" className='mx-3'>Home</Nav.Link>}
                {employer && <Nav.Link href="/employer" className='mx-3'>Dashboard</Nav.Link>}
                {candidate && <Nav.Link href="/candidate" className='mx-3'>Dashboard</Nav.Link>}
                <Nav.Link href="/joblist" className='mx-3' >Browse jobs</Nav.Link>
                <NavDropdown title="Pages" id="basic-nav-dropdown" className='mx-3'>
                    <NavDropdown.Item href="#action/3.1" variant="main">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="blog" className='mx-3'>

                </NavDropdown>
                <Nav.Link href="/contact" className='mx-3'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className='justify-content-end fs-4 d-lg-flex d-md-block d-none' >
            <Nav>
                {employer && <div><Nav.Link onClick={handleClick} href='/' className='mx-3'>Log out</Nav.Link><p className='mx-3'>Welcome, {employer.username}</p></div>}
                {candidate && <div><Nav.Link onClick={handleCandidateLogout} href='/' className='mx-3'>Log out</Nav.Link><p className='mx-3'>Welcome, {candidate.username}</p></div>}

                {(!employer && !candidate) && <Nav.Link href="/employer/login" className='mx-3'>Log in</Nav.Link>}
                <Button href='/employer/post-job' className='d-lg-block mh-100 d-none' style={{backgroundColor:'#29ADB2',border:'none'}} ><p className='m-auto fs-4'>Post a job</p></Button>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigationbar;
