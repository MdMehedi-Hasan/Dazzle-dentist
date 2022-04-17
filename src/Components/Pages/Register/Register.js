import { Icon } from '@iconify/react';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import image from '../../../images/undraw_programming_re_kg9v.svg'

const Register = () => {
  const [signInWithGoogle, googleuser] = useSignInWithGoogle(auth);
  const [signInWithFacebook,fbuser] = useSignInWithFacebook(auth);
  const [signInWithGithub,gituser] = useSignInWithGithub(auth);
    return (
        <div className="d-flex justify-content-evenly align-items-center mt-5 mb-5">
      <div className="w-50">
        <img width={"100%"} height={"200px"} src={image} alt="" />
      </div>
        <div className="w-35 border border-2 rounded p-5">
          <h1 className='mb-3 text-center'>Sign Up</h1>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="email" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
          <p className="register-linked">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
          <div className="d-flex justify-content-center align-items-center or">
            <div></div>
            <span className="px-2">OR</span>
            <div></div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
              <button onClick={() => signInWithGoogle()} className="border-0 bg-white fs-1 pb-2 btn-px"><Icon icon="logos:google-icon" /></button>
              <button onClick={() => signInWithFacebook()} className="border-0 bg-white fs-1 pb-2 btn-px text-primary"><Icon icon="cib:facebook" /></button>
              <button onClick={() => signInWithGithub()} className="border-0 bg-white fs-1 pb-2 btn-px"><Icon icon="logos:github-icon" /></button>
          </div>
        </Form>
      </div>
    </div>
    );
};

export default Register;