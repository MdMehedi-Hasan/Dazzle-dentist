import React from 'react';
import image from '../../../images/mehedi.png'

const About = () => {
    return (
        <div className='row'>
            <div className='col-6 d-flex justify-content-center'>
                <img style={{borderRadius:"50%", backgroundColor:"#41464b75"}} src={image} alt="" />
            </div>
            <div className='col-6'>
                <h1>Hi, I'm Md. Mehedi Hasan</h1>
                <p>I was trying to learn coding by myself early 2019. But everytime javascript pulled me back. When i realised i can't learn it by myself i jumped into this course. The primary goal is to learn basic structure of web (How web works, Programming languages,Interactions etc).</p>
                <h1>Professional goal</h1>
                <ul>
                    <h5>I would like to learn these technologies in coming years</h5>
                    <li>Python</li>
                    <li>Flutter</li>
                    <li>Django</li>
                    <li>Angular</li>
                    <li>Algorithm</li>
                    <li>Data structure</li>
                </ul>
                <p>However, the final goal is to run my own it farm. So that i can work independently and could create new employment for others.</p>
            </div>
        </div>
    );
};

export default About;