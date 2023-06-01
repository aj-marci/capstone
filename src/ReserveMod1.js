import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as Yup from 'yup';
import "yup-phone-lite";


const ReserveMod1 = (props) => {
    const { show, handleClose } = (props)

    const formik = useFormik ({
      initialValues: {
        email:"",
        name:"",
        inOrOut:"",
        date:"",
        people:"",
        phone:""
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        inOrOut: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
        people: Yup.number()
        .min(1, 'Must be at least 1 person')
        .max(6,'We can only host tables of 6 at most')
        .required('Required'),
        phone: Yup.string().phone("US", "Please enter a valid phone number").required('Required'),
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
          <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
          {...formik.getFieldProps("email")}
          id="email"
          type="email"
          placeholder='Enter your email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.email && formik.touched.email}
          />
          <Form.Text>{formik.errors.email}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your First Name</Form.Label>
          <Form.Control
          {...formik.getFieldProps("name")}
          id="name"
          type="text"
          placeholder='Enter your first name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.errors.name && formik.touched.name}
          />
          <Form.Text>{formik.errors.name}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Seating Preference</Form.Label>
          <Form.Select
          {...formik.getFieldProps("inOrOut")}
          id="inOrOut"
          isInvalid={!!formik.errors.inOrOut && formik.touched.inOrOut}
          aria-label="indoor or outdoor seating">
            <option value="1">Indoor</option>
            <option value="2">Outdoor</option>
          </Form.Select>
          <Form.Text>{formik.errors.inOrOut}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Date</Form.Label>
          <Form.Control
          {...formik.getFieldProps("date")}
          id="date"
          type="date"
          disablePast
          isInvalid={!!formik.errors.date && formik.touched.date}
          />
          <Form.Text>{formik.errors.date}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Number of People</Form.Label>
          <Form.Control
          {...formik.getFieldProps("people")}
          type="number"
          id="people"
          placeholder='2'
          isInvalid={!!formik.errors.people && !!formik.touched.people}
          />
          <Form.Text>{formik.errors.people}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
          {...formik.getFieldProps("phone")}
          type="tel"
          id="phone"
          placeholder='123-456-7890'
          isInvalid={!!formik.errors.phone && !!formik.touched.phone}
          />
          <Form.Text>{formik.errors.phone}</Form.Text>
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