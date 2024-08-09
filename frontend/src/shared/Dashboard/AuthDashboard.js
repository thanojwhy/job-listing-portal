import React from 'react';

import JobItemList from '../../user/employer/job-item-list';

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

const commonDashboard = () =>{

    return (
        <div className='card-group row shadow p-3 m-3'>
            <h1>Welcome to your Portal</h1>
            <p>Here are some popular jobs right now </p>
            <JobItemList jobs={JOBS}/>
        </div>
    )
}

export default commonDashboard;