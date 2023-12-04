import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Catagory=()=>{
    return (
        <Container style={{height:'300px',marginTop:'150px'}}>
            <Form action="/joblist">
                <Row>
                    <Col sm>
                        <Form.Control type="input" placeholder="Enter keyword" size='lg' />
                    </Col>
                    <Col sm>
                        <Form.Select size="lg">
                            <option>Select location</option>
                            <option value="bang">Banglore</option>
                        </Form.Select>
                    </Col>
                    <Col sm>
                        <Form.Select size="lg">
                            <option>Select catagory</option>
                            <option>Marketing</option>
                        </Form.Select>
                    </Col>
                    <Col className="" sm>
                        <Button type="submit"  style={{backgroundColor:'#29ADB2',width:'100%',border:'none'}} size="lg">Find jobs</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Catagory;