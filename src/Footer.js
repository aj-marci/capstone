import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <>
    <footer className='fixed-bottom'>
    <Card variant="light" bg="light" border="light">
      <Row>
      <Col sm={12} lg={6}>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Link href="mailto: help@littlelemon.com">
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="darkgrey"/>
          </Card.Link>
        </Card.Body>
        </Col>
        <Col sm={12} lg={6}>
        <Card.Body>
          <Card.Title>Social Media</Card.Title>
          <Card.Link href="https://meta.com" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} size="xl" color="darkgrey"/>
            </Card.Link>
          <Card.Link href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2xl" color="darkgrey"/>
          </Card.Link>
        </Card.Body>
        </Col>
        </Row>
    </Card>
    </footer>
    </>
  );
}

export default Footer;

/*const footerItems = [
  {
    icon: faEnvelope,
    url: "mailto: help@littlelemon.com",
  },
  {
    icon: faFacebookF,
    url: "https://meta.com",
  },
];

function Footer () {
  return (
    <>
    <footer className='fixed-bottom'>
    <Row sm={1} lg={1} className="g-4" style={{width: "12%"}}>
      {footerItems.map(({ icon, url }) => (
        <Col key={footerItems}>
          <Card
          bg="light"
          variant="light"
          border="light">
            <Card.Body>
              <Card.Title>
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {<FontAwesomeIcon icon={icon} url={url}/>}</a>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </footer>
    </>
  );
}*/