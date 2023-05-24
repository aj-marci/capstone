import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
      <>
        <article>
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
        </article>
      </>
    );
  }

  export default About;