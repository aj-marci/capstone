import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const ReserveMod1 = (props) => {
    const { show, handleClose } = (props)

      return (
        <>
          <Modal onClose={handleClose} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Reserve a Table</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="dark" type="submit"
                    style={{marginLeft:"auto",
                            marginRight:"auto"}}>
                    Submit
                </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

    export default ReserveMod1;