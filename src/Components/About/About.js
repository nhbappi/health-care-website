import Button from '@restart/ui/esm/Button';
import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <h1>Let's About Us</h1>

           
         <div>
         <img src={"http://s3.amazonaws.com/assets.brightspot.vetstreet.com/assets/a4/37/40b10925-4a46-4a1b-ac5d-8ad59bb50b07.jpg?1412026898000"} class="img-fluid"></img>
         </div>

<div className="row">

    <div className="col-lg-6 col-md-6 col-12">
    <img src={"https://media.istockphoto.com/photos/happy-doctor-with-dog-at-vet-clinic-picture-id489083722?b=1&k=20&m=489083722&s=170667a&w=0&h=8lTrjdGB80HBWhaZayciBs62cm_1z591_8oTi48vpz0="} class="img-fluid"></img>      
    </div>
    <div className="col-lg-6 col-md-6 col-12">
    <h1>Welcome to Vetrexx!</h1>
    <h4>At ourhospital, you’re not just another client and their pet…we understand your pet is like your family,and we’re here to make  sure your family member lives a healthy and happy life.We believe in providing customized treatment plans tailored to the needs of each individual client and patient. Our animal hospital is located in Mocksville,NC and we’re convenient to Davie Rowan Iredell and Forsyth counties.</h4>
    <Button className="btn-grp" variant="secondary" size="lg" active>Read More</Button>
    </div>

</div>
    
        </div>
    );
};

export default About;