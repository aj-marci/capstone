import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Main() {
    return (
      <>
        <main>
          <Card border='light'>
            <Row>
              <Col sm={12} lg={6}>
                <h1>This Weeks Specials!</h1>
              </Col>
              <Col sm={12} lg={6}>
                <Button variant='dark'>Order Online</Button>
              </Col>
            </Row>
          </Card>
        </main>
      </>
    );
  }

  export default Main;