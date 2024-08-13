import React,{useContext, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';

import {Posted} from '../../user/employer/posted';
import { Applied } from '../../user/employee/applied';

import ArrowNav from '../Util/ArrowNav';
import Button from '../FormElems/Button';
import { AuthContext } from '../context/auth-context';

import './Card.css';

const Card = (props) =>{

    const auth=useContext(AuthContext);
    const {jobId}=useParams();

    const [didApply,setDidApply]=useState(Applied(jobId));

    const apply = () =>{
        setDidApply(true);
        //TODO add application to employee and jobs
    }

    const applyBtn = (
        auth.userType==='Employee' ?
        <Button type='button' className={`btn ${didApply ? 'btn-primary' : 'btn-success'}`} onClick={apply}>{didApply ? 'Applied' : 'Apply'}</Button> 
        : 
        Posted(jobId) ===true ? <Button type='button' className='btn btn-success' >Edit</Button> : ''
    )

    return (
        <div className={`card ${props.classnames}`}>
            {props.header && 
                <div className='card-header bg-transparent border-0 d-flex justify-content-between align-items-center'>
                    <h4><ArrowNav dir={-1}/>{props.header}</h4>
                    {auth.isLoggedIn ? 
                        applyBtn
                        :
                        <NavLink to='/auth' className='btn btn-outline-primary' >Login to Apply</NavLink>
                    }
                </div>
            }
            <div className='card-body'>
                {props.title && 
                    <div className='header d-flex'>
                        {props.company && <b className='border border-3 fs-1 me-3 rounded'>{props.company[0]}</b>}
                        <div className='card-title'>
                            <h5>{props.title}</h5>
                            <p className='text-muted'>{props.company}</p>
                        </div>
                    </div>
                }
                <p className='card-text'>{props.text}</p>
                {props.children}
            </div>
            <div className='card-footer bg-transparent text-muted'>{props.footer}</div>
        </div>
    )
}

export default Card;