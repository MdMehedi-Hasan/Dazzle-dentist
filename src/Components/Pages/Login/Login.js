import { Icon } from "@iconify/react";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../../images/undraw_mobile_application_re_13u3.svg";
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import "./Login.css";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, googleuser] = useSignInWithGoogle(auth);
  const [signInWithFacebook,fbuser] = useSignInWithFacebook(auth);
  const [signInWithGithub, gituser] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";
  if (fbuser || googleuser || gituser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="d-flex justify-content-evenly align-items-center mt-5 mb-5">
      <div className="w-50">
        <img width={"100%"} height={"200px"} src={image} alt="" />
      </div>
      <div className="w-35 border border-2 rounded p-5">
      <h1 className='mb-3 text-center'>Log in</h1>
        <Form className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Link className="float-end mb-3 text-decoration-none" to="/login">Forgot password?</Link>
          <Button className="w-100 mb-4" variant="primary" type="submit">
            Submit
          </Button>
          <p className="register-linked">
            New to Dazzle Dentist? <Link to="/register">Sign Up</Link>
          </p>
          <div className="d-flex justify-content-center align-items-center or">
            <div></div>
            <span className="px-2">OR</span>
            <div></div>
          </div>
        </Form>
        <div className="d-flex justify-content-center mt-2">
          <button onClick={()=>signInWithGoogle()} className="border-0 bg-white fs-1 pb-2 btn-px"><Icon icon="logos:google-icon" /></button>
          <button onClick={()=>signInWithFacebook() } className="border-0 bg-white fs-1 pb-2 btn-px text-primary"><Icon icon="cib:facebook" /></button>
            <button onClick={()=>signInWithGithub() }className="border-0 bg-white fs-1 pb-2 btn-px"><Icon icon="logos:github-icon" /></button>
          </div>
      </div>
    </div>
  );
};

export default Login;
