import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button, Form, Spinner, Toast } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../../images/undraw_mobile_application_re_13u3.svg";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import "./Login.css";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user] = useAuthState(auth);
  const [signInWithGoogle, googleuser] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbuser] = useSignInWithFacebook(auth);
  const [signInWithGithub, gituser] = useSignInWithGithub(auth);
  const [
    signInWithEmailAndPassword,
    existinguser,
    loading,
    usererror,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || "/";
  if (fbuser || googleuser || gituser || existinguser) {
    navigate(from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  const handlePassReset = async () => {
    toast('Email for reset password has sent');
    await sendPasswordResetEmail(email);
    
    }
  return (
    <div className="d-flex justify-content-evenly align-items-center mt-5 mb-5">
      <ToastContainer />
      <div className="w-50">
        <img width={"100%"} height={"200px"} src={image} alt="" />
      </div>
      <div className="w-35 border border-2 rounded p-5">
      <h1 className='mb-3 text-center'>Log in</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
          </Form.Group>
          <p className="text-danger">{usererror && usererror.message}</p>
          <Link onClick={handlePassReset} className="float-end mb-3 text-decoration-none" to="/login">Forgot password?</Link>
          <Button className={ `${loading? "w-100 mb-4 d-flex justify-content-center": "w-100 mb-4 d-block"}`} variant="primary" type="submit">
            Submit {loading? <Spinner animation="border" variant="success" />: ''}
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
