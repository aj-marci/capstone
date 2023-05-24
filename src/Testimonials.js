import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"

function Testimonials() {
    return (
      <>
        <main>
        <Card className='test-title'
          variant='light' border='light'
          style={{width:'70%'}}>
            <Row>
              <Col sm={12} lg={12} align='center'>
              <Card.Title variant='dark'
              style={{
              marginTop:".5rem",
              fontSize:"2.25rem",
              fontFamily:"Markazi"}}>
              Testimonials</Card.Title>
              </Col>
            </Row>
          </Card>
        </main>
      </>
    );
  }

  export default Testimonials;