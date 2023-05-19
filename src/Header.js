import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import Food from "./restauranfood.jpg";

function Header() {
    return (
      <>
      <header style={{marginTop:"2rem",
                      marginLeft:"5%",
                      marginRight:"5%"}}>
        <Card border="light" className='custom-class'
        style={{width:"70%"}}>
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
            </Col>
            <Col sm={12} md={4} lg={6}>
              <Card.Img src={Food}
              className='img-fluid rounded'
              style={{height:"15rem",
              width:"12rem",
              marginLeft:"4rem",
              marginTop:"1.5rem",
              marginBottom:"-1.5rem"}}/>
            </Col>
            </Row>
        </Card>
      </header>
      </>
    );
  }

  export default Header;