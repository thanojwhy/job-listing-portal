import React from 'react';

const Button = (props) =>{
    return (
        <button 
            className={`btn shadow-none ${props.className}`}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;