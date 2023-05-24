import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

function TestCards() {
    return (
      <>
        <Row xs={1} md={2} lg={3}>
        {specials.map(({ id, icon, price, title, description }) => (
            <Col key={id}>
                <Card className='specials'
                      style={{width:'20rem',
                      marginLeft:'auto',
                      marginRight:'auto',
                      marginTop:'1rem',
                      marginBottom:'1rem'}}>
                    <Card.Img variant='top'src={icon} />
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

  export default TestCards;