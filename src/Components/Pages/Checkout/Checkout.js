import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../../../images/appointment.png";
import Booking from "./Booking";

const Checkout = () => {
  return (
    <div className="w-100 d-flex justify-content-around align-items-center">
      <div className="text-center">
        <img src={image} alt="" />
              <h4 className="text-primary">Confirm your appointment</h4>
              <p>Please provide your personal information to complete appointment. <br /> Don't worry we don't share our client information. <br /> <small className="text-danger">(Note: Please dont make any online payments)</small> </p>
      </div>
      <div>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button as={Link} to="/booking" onClick={<Booking></Booking>} className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
