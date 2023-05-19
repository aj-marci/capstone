import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import Food from "./restauranfood.jpg";

function Header() {
    return (
      <>
      <header style={{marginTop:"2rem"}}>
        <Card border="light" className='custom-class'
        style={{width:"75%"}}>
          <Row>
            <Col sm={12} lg={6}>
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
              fontSize:".95rem",
              width:"80%",
              fontFamily:"Karla"}}>
              We are a family owned Mediterranian restaurant,
              focused on traditional recipes, served with a modern twist nestled
              Downtown Chicago.
            </Card.Subtitle>
            </Col>
            <Col sm={12} lg={4}>
              <Card.Img variant="bottom" src={Food}
              className='img-fluid rounded'
              style={{height:"16rem",
              width:"12rem"}}/>
            </Col>
            </Row>
        </Card>
      </header>
      </>
    );
  }

  export default Header;