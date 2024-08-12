import React,{useContext, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';

import ArrowNav from '../Util/ArrowNav';
import Button from '../FormElems/Button';
import { AuthContext } from '../context/auth-context';

import './Card.css';

const EMPS = [
    {
      id: 'e1',
      name: 'Kate Abdo',
      email: 'Katie@example.com',
      password: '123456',
      type:'Employee',
      location: 'California',
      experience: [
        {
          position : 'Intern',
          company: 'BWS',
          startDate: '2022-08-25',
          endDate: '2024-03-03',
          salary: 130000,
        },
      ],
      education: [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University of California, Berkeley',
          cgpa: 4.15,
          startDate:'2018-08-12',
          endDate: '2022-07-03',
        }
      ],
      skills: ['MERN Stack','Spring','Java','Python'],
      linkedin : "",
      gitHub : "",
      applications: ['j1'],
    }
  ]

const Card = (props) =>{

    const auth=useContext(AuthContext);
    const {jobId}=useParams();

    const applied=()=>{
        const emp=EMPS.find(emp=>emp.id===auth.userId);
        return emp ? emp.applications.includes(jobId) : false;
    }

    const [didApply,setDidApply]=useState(applied);

    const apply = () =>{
        setDidApply(true);
    }

    return (
        <div className={`card ${props.classnames}`}>
            {props.header && 
                <div className='card-header bg-transparent border-0 d-flex justify-content-between align-items-center'>
                    <h4><ArrowNav dir={-1}/>{props.header}</h4>
                    {auth.isLoggedIn ?
                        <Button type='button' className={`btn ${didApply ? 'btn-primary' : 'btn-success'}`} onClick={apply}>{didApply ? 'Applied' : 'Apply'}</Button>
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