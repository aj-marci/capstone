import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Lemon from "./Images/lemon-dessert.jpg";
import Salad from "./Images/greek-salad.jpg";
import Bread from "./Images/bruchetta.svg";

const specials = [
    {
        id: 1,
        image: Lemon,
        price: "$7.00",
        name: "Lemon Dessert",
        description: "Fresh lemon and cheescake puree, graham cracker crust.",
    },
    {
        id: 2,
        image: Salad,
        price: "$9.00",
        name: "Greek Salad",
        description: "Fresh romaine, topped with parm cheese, green olives, ranch dressing",
    },
    {
        id: 3,
        image: Bread,
        price: "$12.00",
        name: "Bruchetta",
        description: "Fresh red tomatoes, fresh mozzarella, on top of sliced Baguette.",
    },
]

function MainCards() {
    return (
      <>
      <article style={{marginTop:"5rem"}}>
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
        {specials.map(({ image, name, price, description, id}) => (
            <Col key={id}>
                <Card className='specials-card shadow'
                      style={{width:'20rem',
                      marginLeft:'auto',
                      marginRight:'auto',
                      marginTop:'1rem',
                      marginBottom:'2rem'}}>
                    <Card.Img src={image} variant='top' />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle style={{color:"#F4CE14"}}>{price}</Card.Subtitle>
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
        </article>
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