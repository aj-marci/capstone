import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bruchetta from "./Images/bruchetta.svg";
import Button from 'react-bootstrap/Button';

const specials = [
    {
        id:"dessert",
        icon: "./Images/lemon-dessert.jpg",
        price: "$7.00",
        title: "Lemon Dessert",
        description: "Fresh lemon and cheescake puree, graham cracker crust.",
    },
    {
        id:"salad",
        icon: "./Images/greek-salad.jpg",
        price: "$9.00",
        title: "Greek Salad",
        description: "Fresh romaine, topped with parm cheese, green olives, ranch dressing",
    },
    {
        id:"app",
        icon: "./Images/bruchetta.svg",
        price: "$12.00",
        title: "Bruchetta",
        description: "Fresh red tomatoes, fresh mozzarella, on top of sliced Baguette.",
    },
]

function MainCards() {
    return (
      <>
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
              Current Specials!</Card.Title>
            </Col>
        </Row>
    </Card>
        <Row xs={1} md={2} lg={3}>
        {specials.map(({ id, price, title, description }) => (
            <Col key={id}>
                <Card className='specials'
                      style={{width:'20rem',
                      marginLeft:'auto',
                      marginRight:'auto',
                      marginTop:'1rem',
                      marginBottom:'1rem'}}>
                    <Card.Img variant='top'src={Bruchetta} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className='text-muted'>{price}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                        <Button className='order-btn'
                            variant='dark'
                            bg='dark'
                            style={{
                            fontFamily:"Karla"}}>Add To Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
      </>
    );
  }

  export default MainCards;


  /* const specials = [
    {
        id:"dessert",
        pic: "./Images/lemon-dessert.jpg",
        price: "$10.00",
        title: "Lemon Dessert",
        description: "Fresh lemon and cheescake puree, graham cracker crust.",
    },
    {
        id:"salad",
        pic: "./Images/greek-salad.jpg",
        price: "$10.00",
        title: "Greek Salad",
        description: "Fresh romaine, topped with parm cheese, green olives, ranch dressing",
    },
    {
        id:"app",
        pic: "./Images/bruchetta.svg",
        price: "$10.00",
        title: "Bruchetta",
        description: "Fresh red tomatoes, fresh mozzarella, on top of sliced Baguette.",
    },
]

function MainCards() {
    return (
      <>
        <Row xs={1} md={1} lg={3}>
        {specials.map(({ pic, price, title, description }) => (
            <Col key={specials}>
                <Card>
                    <Card.Img variant='top'
                    src={pic} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className='text-muted'>{price}</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
      </>
    );
  } */