import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Card, CardGroup, Carousel, Col, Form, Row } from 'react-bootstrap';
import Photo1 from '../../images/istockphoto-1303362255-170667a.jpg';
import Photo2 from '../../images/istockphoto-1311222244-170667a.jpg';
import Photo3 from '../../images/istockphoto-885571364-170667a.jpg';
import HomeServices from '../HomeServices/HomeServices';
import Button from '@restart/ui/esm/Button';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data))
    }, []);
    return (
      <div>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Our Dog Vetenary</h3>
      <p>We provide a best service in your are.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Our Dog Vetenary</h3>
      <p>We provide a best service in your are..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Photo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Our Dog Vetenary</h3>
      <p>We provide a best service in your are..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


{/* sercivess */}


<h1 className="mt-5 mb-3 color-match">
      Services
</h1>
   <div>
   <Row  xs={1} md={3} className="gaps">
     {
       services.map(service => <HomeServices
       key={service.id}
       service={service}>

       </HomeServices>)
     }
     </Row>
   </div>




   {/* special some works */}


   <div className="mt-5 mb-3 color-match">
     <h1>Our Some Special Works</h1>
   </div>
   <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/male-and-female-surgeons-performing-surgery-on-dog-picture-id916874972?b=1&k=20&m=916874972&s=170667a&w=0&h=V9opAQ5UaTlE2_Pv98s9apCoxgTyMQ_VQHmZz0k3_So=" />
    <Card.Body>
      <Card.Title><h1>Cat operation</h1></Card.Title>
      <Card.Text>
      Male and female surgeons performing surgery on dog. Doctors are wearing scrubs in operating room. Veterinarians are performing medical procedure on animal.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/female-veterinary-technician-preparing-tabby-cat-for-surgery-picture-id1310827142?b=1&k=20&m=1310827142&s=170667a&w=0&h=tofQmwFgy2tduslvNx8TEA8e4rVMPmUe5DgJ4m7ZP1Q=" />
    <Card.Body>
      <Card.Title><h1>Cat operation</h1></Card.Title>
      <Card.Text>
      Personal perspective with focus on background mid 20s woman in blue scrubs caring for cat lying on operating table before surgical procedure.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://media.istockphoto.com/photos/dog-receiving-anaesthetic-picture-id516251945?b=1&k=20&m=516251945&s=170667a&w=0&h=T12bVqIUA6xQtUjU0vMYb5G8GRMPHHoX_oLXjCOxrhQ=" />
    <Card.Body>
      <Card.Title><h1>Dog Operation</h1></Card.Title>
      <Card.Text>
      Close-up of dog under anesthesia on operating table. Cropped image of veterinarians are working in operating room. Pipe is inserted in animal's mouth.
      </Card.Text>
    </Card.Body>
  
  </Card>
</CardGroup>


{/* contact  form*/}
<div className="contact-form container mb-3">
<h1 className="mt-3 mb-4">
            Contact with Us
          </h1>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button className="bg-success text-white white m-3 p-2 rounded-3" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

      </div>

    );




};

export default Home;