import React from 'react';
import './errorMessage.css'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <div>
            <img src={img} alt='error'/>
            <span>Something went wrong...</span>
        </div>
    )
};

export default ErrorMessage;
