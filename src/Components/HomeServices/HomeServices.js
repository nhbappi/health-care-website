import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import './HomeServices.css';
import { Link } from 'react-router-dom';
const HomeServices = (props) => {
    const {id, name, image, Cost, description} = props.service;
    
    return (
        <Col>
        <Card className="courseCard" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title><h1>{name}</h1></Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
                <Card.Text className="courseCard"><h1>Visit: ${Cost}</h1></Card.Text>
            <div className="pb-3">
              <Link to={`/booking/${id}`}>
              <button className="btn btn-warning">Details</button>
              </Link>
            </div>
            
        </Card>
        </Col>
    );
};

export default HomeServices;