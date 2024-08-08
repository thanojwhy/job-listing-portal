import React,{useState} from 'react';

import ArrowNav from '../Util/ArrowNav';

import './Card.css';

const Card = (props) =>{

    const [didApply,setDidApply]=useState('');

    const apply = () =>{
        setDidApply('true');
    }

    return (
        <div className={`card ${props.classnames}`}>
            {props.header && 
                <div className='card-header bg-transparent border-0 d-flex justify-content-between align-items-center'>
                    <h4><ArrowNav dir={-1}/>{props.header}</h4>
                    <button type='button' className={`btn ${didApply ? 'btn-primary' : 'btn-success'}`} onClick={apply}>{didApply ? 'Applied' : 'Apply'}</button>
                </div>
            }
            <div className='card-body'>
                <div className='header d-flex'>
                    <b className='border border-3 fs-1 me-3 rounded'>{props.company[0]}</b>
                    <div className='card-title'>
                        <h5>{props.title}</h5>
                        <p className='text-muted'>{props.company}</p>
                    </div>
                </div>
                <p className='card-text'>{props.text}</p>
                {props.children}
            </div>
            <div className='card-footer bg-transparent text-muted'>{props.footer}</div>
        </div>
    )
}

export default Card;