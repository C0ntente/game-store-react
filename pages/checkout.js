import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function checkout() {
  const [form, setForm] = useState({});
  const [validated, setvalidated] = useState(false);
  function handleSubmit(event) {
    const formValid = event.currentTarget.checkValidity();
    event.preventDefault();
    event.stopPropagation();
    if (formValid) {
      // chamar o backend
      console.log(form);
    }
    setvalidated(true);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    cpf: Yup.string().required(),
    cardNumber: Yup.string().required(),
    address: Yup.string().required(),
    complement: Yup.string().required(),
    number: Yup.number().integer().required(),
    city: Yup.string().required(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        name: 'Fulano de tal',
        cpf: '000.000.000-00',
        cardNumber: '',
        address: '',
        complement: '',
        number: '',
        city: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Container className="p-3">
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group controlId="validationFormik01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="validationFormik02">
              <Form.Label>Cpf</Form.Label>
              <Form.Control
                type="text"
                name="cpf"
                value={values.cpf}
                onChange={handleChange}
                isInvalid={!!errors.cpf}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cpf}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik03">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                isInvalid={!!errors.cardNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cardNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik04">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik05">
              <Form.Label>Complement</Form.Label>
              <Form.Control
                type="text"
                name="complement"
                value={values.complement}
                onChange={handleChange}
                isInvalid={!!errors.complement}
              />
              <Form.Control.Feedback type="invalid">
                {errors.complement}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik06">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={values.number}
                onChange={handleChange}
                isInvalid={!!errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik07">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Finish</Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
