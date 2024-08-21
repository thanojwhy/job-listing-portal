import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TimeAgo from '../../shared/Util/TimeAgo';
import { AuthContext } from '../../shared/context/auth-context';
import { Posted } from '../employer/posted';
import ApplicantList from '../employee/applicants-list';

import Card from '../../shared/UI/Card';

const JobDetails = () =>{

    const jid=useParams().jobId;
    const [job, setJob] = useState(null);

    const auth=useContext(AuthContext);

    const hasPosted=Posted(jid)
    
    useEffect(()=>{
        const getJob = async () =>{
            try{
                const res=await fetch(`http://localhost:5000/api/jobs/${jid}`);
                const data=await res.json()
                setJob(data)
            } catch(err){
                console.log(err);
            }
        }
        getJob()
    },[jid])

    if(!job){
        return <h1>404 Error</h1>
    }

    const timeAgo=<TimeAgo date={new Date(job.posted)} />
    const details=(
                <React.Fragment>
                    <div>
                        <div>
                            <b>Employment Type</b>
                            <p>{job.type}</p>
                        </div>
                        <div>
                            <b>Experience</b>
                            <p>{job.experience}</p>
                        </div>
                        <div>
                            <b>Education</b>
                            <p>{job.education}</p>
                        </div>
                        <div>
                            <b>Salary</b>
                            <p>{job.salary}</p>
                        </div>
                        <div>
                            <b>Location</b>
                            <p>{job.location}</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h5><b>Job Description</b></h5>
                            <p>{job.description}</p>
                        </div>
                        <div>
                            <h5><b>Required Skills</b></h5>
                            <ul>
                                {job.skills.map((skill)=>(
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5><b>Roles and Responsibilities</b></h5>
                            <ul>
                                {job.roles.map((role)=>(
                                    <li key={role}>{role}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
    )

    return ( 
        <div className='card-group row'>
            <div className='container'>
                <Card 
                    classnames="m-3 p-3"
                    header={"Job Details"}
                    title={job.title}
                    company={job.company}
                    footer={timeAgo}
                >
                    {auth.isLoggedIn &&
                        hasPosted===true ?
                            <React.Fragment>
                                <ApplicantList jobId={jid} />
                            </React.Fragment>
                        :
                            details
                    }
                    {!auth.isLoggedIn && details}
                    
                </Card>
            </div>
        </div>
    )
}

export default JobDetails;