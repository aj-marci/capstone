import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./App.css"

function Footer () {
  return (
    <>
    <footer>
    <Card variant="light" bg="light" border="light">
      <Row>
      <Col sm={12} lg={2}>
        <Card.Body>
          <Card.Text style={{fontFamily:"Karla",
                              color:"#495E57"}}>
            Contact Us</Card.Text>
          <Card.Link href="mailto: help@littlelemon.com">
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="#495E57"
            className='mail-icon'/>
          </Card.Link>
        </Card.Body>
        </Col>
        <Col sm={12} lg={2}>
        <Card.Body>
          <Card.Text style={{fontFamily:"Karla",
                              color:"#495E57"}}>
            Social Media</Card.Text>
          <Card.Link href="https://meta.com" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} size="xl" color="#495E57"
            className='fb-icon'/>
            </Card.Link>
          <Card.Link href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2xl" color="#495E57"
            className='ig-icon'/>
          </Card.Link>
        </Card.Body>
        </Col>
        <Col sm={12} lg={2}>
        <Card.Body>
          <Card.Text style={{fontFamily:"Karla",
                              color:"#495E57"}}>
            Company</Card.Text>
          <Card.Link href="indeed.com" target="_blank"
          className="mb-2 text-muted"
          style={{fontSize:".9rem"}}>
            Careers</Card.Link>
          <Row>
          <Card.Link href="https://nhl.com" target="_blank"
          className="mb-2 text-muted"
          style={{fontSize:".9rem"}}>
            Our Story</Card.Link>
          </Row>
        </Card.Body>
        </Col>
        </Row>
        <Card.Footer className='text-muted text-center'>
          Copyright Little Lemon</Card.Footer>
    </Card>
    </footer>
    </>
  );
}

export default Footer;