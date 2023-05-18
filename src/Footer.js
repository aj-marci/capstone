import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import "./App.css";

const footerItems = [
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
    <Row sm={1} md={1} lg={2} className="g-4" style={{width: "12%"}}>
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
}

export default Footer;