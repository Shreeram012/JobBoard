import { Carousel,Image } from "react-bootstrap";

const Testimonials=()=>{
    return (       
        <Carousel data-bs-theme="dark" interval={1500}>
        <div interval={0}><p className="fs-1 ps-5 pb-5 m-5">Testimonials</p></div>
        <Carousel.Item>
            <div style={{height:'300px'}}></div>
          <Carousel.Caption>
          <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" roundedCircle />
            <h5 className="mt-4">John smith</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div style={{height:'300px'}}></div>
          <Carousel.Caption>
          <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" roundedCircle/>
            <h5 className="mt-4">Jack Sparrow</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div style={{height:'300px'}}></div>
          <Carousel.Caption>
          <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" roundedCircle/>
            <h5 className="mt-4">Jane Doe</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );

}

export default Testimonials;
