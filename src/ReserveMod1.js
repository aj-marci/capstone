import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./App.css"



const ReserveMod1 = (props) => {
    const { show, handleClose } = (props)
    const [alert, setAlert] = useState(false);


    const formik = useFormik ({
      initialValues: {
        email:"",
        name:"",
        occasion:"",
        date:"",
        people:"",
        time:"",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        occasion: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
        people: Yup.number()
        .min(1, 'Must be at least 1 person')
        .max(10,'We can only host tables of 10 at most')
        .required('Required'),
        time: Yup.string().required('Required'),
    }),
    onSubmit: () => {
        if(!!formik.errors) {
        setAlert(true)};
        formik.resetForm();
    },
    })

      return (
        <>
        <Modal onClose={handleClose} show={show} onHide={handleClose}
               className='reserve-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Experience Little Lemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Alert show={alert} variant="success">
            <Alert.Heading>Reservation confirmed!</Alert.Heading>
              <p>We're so excited to have you!</p>
              <p>You will receive an email confirmation reflecting the details.</p>
          </Alert>
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
          <Form.Label>Occasion</Form.Label>
          <Form.Select
          {...formik.getFieldProps("occasion")}
          id="occasion"
          isInvalid={!!formik.errors.occasion && formik.touched.occasion}
          aria-label="indoor or outdoor seating">
            <option value="1">Anniversary</option>
            <option value="2">Birthday</option>
            <option value="2">Retirement</option>
            <option value="2">Other / Just For Fun</option>
          </Form.Select>
          <Form.Text>{formik.errors.occasion}</Form.Text>
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
          <Form.Label>Number of Guests</Form.Label>
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
          <Form.Label>Preferred Time</Form.Label>
          <Form.Select
          {...formik.getFieldProps("time")}
          id="time"
          isInvalid={!!formik.errors.time && formik.touched.time}
          aria-label="preferred reservation time">
            <option value="1">4:00 PM</option>
            <option value="2">4:30 PM</option>
            <option value="3">5:00 PM</option>
            <option value="4">5:00 PM</option>
            <option value="5">6:00 PM</option>
            <option value="6">6:30 PM</option>
            <option value="6">7:00 PM</option>
            <option value="7">7:30 PM</option>
            <option value="8">8:00 PM</option>
            <option value="9">8:30 PM</option>
            <option value="10">9:00 PM</option>
          </Form.Select>
          <Form.Text>{formik.errors.time}</Form.Text>
        </Form.Group>
        <Button
            variant="dark"
            type="submit">
              Reserve
            </Button>
        </Form>
          </Modal.Body>
          </Modal>
        </>
      );
    }

    export default ReserveMod1;


    /*
        const formik = useFormik ({
      initialValues: {
        email:"",
        name:"",
        occasion:"",
        date:"",
        people:"",
        time:"",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Required'),
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        occasion: Yup.string().required('Required'),
        date: Yup.date().required('Required'),
        people: Yup.number()
        .min(1, 'Must be at least 1 person')
        .max(6,'We can only host tables of 6 at most')
        .required('Required'),
        time: Yup.string().required('Required'),
    }),
    onSubmit: () => {
        if(!!formik.errors) {
        setAlert(true)};
        formik.resetForm();
    },
    })
    */