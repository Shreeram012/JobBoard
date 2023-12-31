import {SocialIcon} from 'react-social-icons' 
import {Image} from 'react-bootstrap' 
import logo from './images/active-search-2-128.png'


const Footer = () => {
    return(
        <footer className="text-center text-lg-start bg-foot text-muted footer">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        <span className='fs-5'>Get connected with us on social networks:</span>
        </div>
        <div className='d-flex'>
        <div className="me-4 text-reset">
            <SocialIcon url='https://facebook.com' /> 
        </div>
        <div className="me-4 text-reset">
        <SocialIcon url="https://twitter.com" />
        </div>
        <div className="me-4 text-reset">
            <SocialIcon url='https://instagram.com'/>
        </div>
        <div className="me-4 text-reset">
            <SocialIcon url='https://linkedin.com'/>
        </div>
        </div>
    </section>
    <section className="">
        <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
            <Image src={logo} fluid style={{height: '30px'}} ></Image>  Job board
            </h6>
            <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
            </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
                Products
            </h6>
            <p>
                <a href="#" className="text-reset">Job board</a>
            </p>
            <p>
                <a href="#" className="text-reset">Other</a>
            </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
                Useful links
            </h6>
            <p>
                <a href="#" className="text-reset">Pricing</a>
            </p>
            <p>
                <a href="#" className="text-reset">Settings</a>
            </p>
            <p>
                <a href="#" className="text-reset">Orders</a>
            </p>
            <p>
                <a href="#" className="text-reset">Help</a>
            </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i> Banglore, India</p>
            <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
            </p>
            <p><i className="fas fa-phone me-3"></i> +01 23456788</p>
            <p><i className="fas fa-print me-3"></i> +01 234 567 89</p>
            </div>
        </div>
        </div>
    </section>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright:  
    <a className="text-reset fw-bold" href="#">shreeram</a>
  </div>
</footer>
    )
};
export default Footer;