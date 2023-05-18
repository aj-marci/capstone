import Card from 'react-bootstrap/Card';

function Header() {
    return (
      <>
      <header style={{marginTop:"20px"}}>
        <Card border="light" bg="#F4CE14">
          <Card.Title>Little Lemon</Card.Title>
            <Card.Text>Chicago</Card.Text>
              <Card.Subtitle>We are a family owned Mediterranian restaurant,
                <br/>focused on traditional recipes, served with a moder twist.
              </Card.Subtitle>
        </Card>
      </header>
      </>
    );
  }

  export default Header;