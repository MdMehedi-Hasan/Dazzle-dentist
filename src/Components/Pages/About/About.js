import React from 'react';
import image from '../../../images/mehedi.png'

const About = () => {
    return (
        <div className=''>
            <div className=''>
                <img style={{borderRadius:"50%", width:"20%", backgroundColor:"#41464b75"}} src={image} alt="" />
            </div>
            <div>
                <h1>Hi, I'm Md. Mehedi Hasan</h1>
                <p></p>
            </div>
        </div>
    );
};

export default About;