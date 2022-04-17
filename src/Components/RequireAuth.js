import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from "../firebase.init"

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <div style={{height:'200px'}} className='d-flex flex-column justify-content-center align-items-center mt-5'><Spinner style={{width:'5rem', height:'5rem'}} animation="border" variant="success" /> Loading....</div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;