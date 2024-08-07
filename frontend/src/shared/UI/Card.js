import React from 'react';

const Card = (props) =>{
    return (
        <div className={`card d-inline-flex ${props.classnames}`}>
            <h4 className='card-header'>{props.header}</h4>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.text}</p>
                {props.children}
            </div>
            <div className='card-footer'>{props.footer}</div>
        </div>
    )
}

export default Card;