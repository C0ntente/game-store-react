import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

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
  return (
    <Container className="p-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="form.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.cpf">
          <Form.Label>Cpf</Form.Label>
          <Form.Control
            value={form.cpf}
            required
            onChange={(e) => setForm({ ...form, cpf: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            value={form.cardNumber}
            required
            onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            value={form.address}
            required
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.complement">
          <Form.Label>Complement</Form.Label>
          <Form.Control
            value={form.complement}
            onChange={(e) => setForm({ ...form, complement: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.number">
          <Form.Label>Number</Form.Label>
          <Form.Control
            value={form.number}
            required
            onChange={(e) => setForm({ ...form, number: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="form.city">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={form.city}
            required
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Finish</Button>
      </Form>
    </Container>
  );
}
