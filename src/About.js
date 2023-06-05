import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import owners from "./Images/owners.jpg";
import "./App.css"

function About() {
    return (
      <>
        <article style={{marginBottom:"8rem"}} id="about-section">
        <Card className='test-title'
          variant='light' border='light' bg='light'
          style={{width:'70%'}}>
        <Row>
            <Col sm={12} lg={12} align='center'>
              <Card.Title variant='dark'
              style={{
              marginTop:".5rem",
              fontSize:"2.25rem",
              fontFamily:"Markazi"}}>
              About Us</Card.Title>
            </Col>
        </Row>
    </Card>
      <Card border="light" className='shadow about-card'
        style={{width:"60%"}}>
          <Row>
            <Col sm={12} md={12} lg={6}>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginTop:"1.5rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              We are Yannis and Luigi, first generation Greek American brothers,
              and owners of Little Lemon.
            </Card.Subtitle>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginTop:"1rem",
              marginBottom:"1rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              Our menu reflects recipes passed down to us
              that date back to the 19th Century.
            </Card.Subtitle>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginBottom:"1.5rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              Come on in and say hello!
            </Card.Subtitle>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card.Img src={owners}
              className='img-fluid rounded shadow'
              style={{
              marginLeft:"-1.5rem",
              marginTop:".5rem",
              marginBottom:"-4rem"}}/>
            </Col>
            </Row>
            <Row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.414162603789!2d-87.6553327!3d41.9484384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3b2e59adf21%3A0x1cea3ee176ddd646!2sWrigley%20Field!5e0!3m2!1sen!2sus!4v1685985410400!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{border:"0",
            marginTop:"5rem",
            marginBottom:"1rem"}}
            allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            </Row>
        </Card>
        </article>
      </>
    );
  }

  export default About;