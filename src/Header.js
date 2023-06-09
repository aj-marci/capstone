import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ReserveMod1 from './ReserveMod1';
import "./App.css"
import Food from "./Images/restauranfood.jpg";

function Header() {

  const [show, setShow] = useState(false);

    return (
      <>
      <header style={{marginTop:"2rem",
                      marginLeft:"5%",
                      marginRight:"5%"}}>
        <Card border="light" className='shadow custom-class'
        style={{width:"70%", marginBottom:"2rem"}}>
          <Row>
            <Col sm={12} md={4} lg={6}>
            <Card.Title style={{
              marginLeft:"1.15rem",
              marginTop:".5rem",
              fontSize:"2.25rem",
              fontFamily:"Markazi",
              color:"#F4CE14"}}>
              Little Lemon</Card.Title>
            <Card.Text style={{
              marginLeft:"1.15rem",
              fontFamily:"Karla",
              fontSize:"1.5rem"}}>
            Chicago</Card.Text>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginBottom:".5rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              We are a family owned Mediterranian restaurant,
              focused on traditional recipes, served with a modern twist nestled
              Downtown Chicago.
            </Card.Subtitle>
            <Button
                onClick={() => setShow(true)}
                className='reserve-btn'
                variant='dark'
                bg='dark'
                style={{
                fontFamily:"Karla"
              }}>Reserve a Table</Button>
            </Col>
            <Col sm={12} md={4} lg={6}>
              <Card.Img src={Food}
              className='img-fluid rounded shadow'
              style={{height:"15rem",
              width:"12rem",
              marginLeft:"4rem",
              marginTop:"1.5rem",
              marginBottom:"-1.5rem"}}/>
            </Col>
            </Row>
        </Card>
        <ReserveMod1
                show={show}
                handleClose={() => setShow(false)}
                handleShow={() => setShow(true)} />
      </header>
      </>
    );
  }

  export default Header;