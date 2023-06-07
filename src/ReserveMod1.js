import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./App.css";
import React from "react";


const ReserveMod1 = (props) => {
    const { show, handleClose } = (props)
    const [alert, setAlert] = useState(false);

    const reserveSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      occasion: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      people: Yup.number()
      .min(1, 'Must be at least 1 person')
      .max(10,'We can only host tables of 10 at most')
      .required('Required'),
      time: Yup.string().required('Required'),
    });

      return (
        <>
        <Modal onClose={handleClose}
              show={show}
              onHide={handleClose}
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
          <Formik   initialValues={{
                    email: "",
                    firstName:"",
                    occasion:"",
                    date:"",
                    people:"",
                    time:""}}
                  validationSchema={reserveSchema}
                  onSubmit={() => {
                      if(!!reserveSchema) {
                      setAlert(true)};
                      Formik.resetForm();
                  }}
          >
                  {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
       }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}>
          <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
          name="email"
          type="email"
          placeholder='Enter your email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.email && touched.email}
          aria-label="your email address"
          />
          <Form.Text>{errors.email}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Your First Name</Form.Label>
          <Form.Control
          name="firstName"
          type="text"
          placeholder='Enter your first name'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.firstName && touched.firstName}
          aria-label="your first name"
          />
          <Form.Text>{errors.firstName}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Occasion</Form.Label>
          <Form.Select
          name="occasion"
          value={values.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.occasion && touched.occasion}
          aria-label="reservation occasion">
            <option value="1">Anniversary</option>
            <option value="2">Birthday</option>
            <option value="2">Retirement</option>
            <option value="2">Other / Just For Fun</option>
          </Form.Select>
          <Form.Text>{errors.occasion}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Date</Form.Label>
          <Form.Control
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          disablePast
          isInvalid={!!errors.date && touched.date}
          aria-label="preferred reservation date"
          />
          <Form.Text>{errors.date}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
          type="number"
          name="people"
          placeholder='0'
          value={values.people}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.people && !!touched.people}
          aria-label="number of guests"
          />
          <Form.Text>{errors.people}</Form.Text>
        </Form.Group>
        <Form.Group style={{marginBottom:"1rem"}}>
          <Form.Label>Preferred Time</Form.Label>
          <Form.Select
          name="time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.time && touched.time}
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
          <Form.Text>{errors.time}</Form.Text>
        </Form.Group>
        <Button
            variant="dark"
            type="submit"
            disabled={isSubmitting}>
              Reserve
            </Button>
        </Form>
        )}
        </Formik>
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