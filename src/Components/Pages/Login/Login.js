import React from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/undraw_fill_form_re_cwyf.svg'

const Login = () => {
    return (
        <div className='d-flex justify-space-around'>
            <div >
                <img width={'50%'} src={image} alt="" />
            </div>
            <div>
            <Form className=''>
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            </div>
            
        </div>
    );
};

export default Login;