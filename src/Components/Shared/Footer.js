import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center bg-dark text-white  height'>
            &copy; All Rights Reserved (2019 &mdash; {new Date().getFullYear()})
        </div>
    );
};

export default Footer;