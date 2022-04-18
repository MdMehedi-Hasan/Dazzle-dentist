import React from 'react';
import image from '../../images/404.svg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className="w-25 mt-5" src={image} alt="" />
            <h5 className='text-danger'>Aw snap! The page not found.</h5>
            <p className='text-center'>This happens when you write wrong keyword/path or maybe your connection has interrupted. <br /> Try to reload the page or enter right keyword.</p>
        </div>
    );
};

export default NotFound;