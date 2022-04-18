import React from 'react';

const Booking = () => {
    return (
        <div style={{height:'285px'}} className='d-flex flex-column justify-content-center align-items-center mt-5 text-center'>
            <h1 className='text-success'>Your appointment is successful.</h1>
            <p>We will notify the date of your appointment over phone. <br /> We recommend our clients to arrive before 30 minitues of the appointment time.</p>
        </div>
    );
};

export default Booking;