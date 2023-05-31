import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as Yup from 'yup';


const ReserveMod1 = (props) => {
    const { show, handleClose } = (props)

    const formik = useFormik ({
      initialValues: {
        email:"",
        name:"",
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: () => {
      formik.resetForm();
    },
    })

      return (
        <>
        <Modal onClose={handleClose} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Come Dine With Us!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
          <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
          id="email"
          type="email"
          placeholder='Enter your email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.email && formik.touched.email}
          />
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your First Name</Form.Label>
          <Form.Control
          id="name"
          type="text"
          placeholder='Enter your first name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.name && formik.touched.name}
          />
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Seating Preference</Form.Label>
          <Form.Select aria-label="indoor or outdoor seating">
            <option value="1">Indoor</option>
            <option value="2">Outdoor</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date"/>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Number of People</Form.Label>
          <Form.Control type="number" name="seats" placeholder='2'/>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" name="phone" placeholder='123-456-7890'/>
        </Form.Group>
        <Button
            variant="dark"
            type="submit">
              Submit
            </Button>
        </Form>
          </Modal.Body>
          </Modal>
        </>
      );
    }

    export default ReserveMod1;