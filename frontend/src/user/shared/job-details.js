import React from 'react';
import { useParams } from 'react-router-dom';

import TimeAgo from '../../shared/Util/TimeAgo';

import Card from '../../shared/UI/Card';


const JOBS=[
    {
        id:'j1',
        title : "Python Developer",
        company: "MR",
        type: "Full Time",
        experience: "0-1 Years",
        education: "Bachelor",
        salary: "Not Disclosed",
        location: ["Remote","Bengaluru,IN"],
        posted: new Date('2024-08-08 13:00:00'),
        description: "Python Developer",
        skills: [
            "Proficiency in Python programming",
            "Experience with web application frameworks such as Django or Flask",
            "Understanding of code versioning tools, such as Git",
            "Knowledge of relational databases and SQL"
        ],
        roles:[
            "Design, develop, test, and maintain software applications using Python",
            "Collaborate with cross-functional teams in an agile environment",
            "Write reusable, efficient, and scalable code",
            "Troubleshoot and debug applications",
            "Participate in code and design reviews"
        ]
    }
]

const JobDetails = () =>{

    const jid=useParams().jobId;

    const job=JOBS.find((j)=>jid===j.id);

    if(!job){
        return <h1>404 Error</h1>
    }

    const timeAgo=<TimeAgo date={job.posted} />

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
                            <p>{job.location.join(' | ')}</p>
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

                </Card>
            </div>
        </div>
    )
}

export default JobDetails;