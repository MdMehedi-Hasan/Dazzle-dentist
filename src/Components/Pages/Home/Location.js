import React from "react";
import { Button, Form } from "react-bootstrap";

const Location = () => {
  return (
      <div>
          <h1 className="text-center mx-auto w-25 w-md-50 mt-5 mb-5">My Chamber <hr /> </h1>
      <div className="d-flex flex-column flex-xl-row justify-content-between justify-content-xl-around align-items-center">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13061078.229360975!2d-128.3194245286408!3d36.94438454022891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1650229687763!5m2!1sen!2sbd"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>

        <Form className="w-md-25 mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Location;
