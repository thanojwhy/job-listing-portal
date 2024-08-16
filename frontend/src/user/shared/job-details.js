import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import TimeAgo from '../../shared/Util/TimeAgo';
import { AuthContext } from '../../shared/context/auth-context';
import { Posted } from '../employer/posted';
import ApplicantList from '../employee/applicants-list';

import Card from '../../shared/UI/Card';


const JOBS = [
    {
        id: 'j1',
        created: 'c1',
        title: "Python Developer",
        company: "MR",
        type: "Full Time",
        experience: "0-1 Years",
        education: "Bachelor",
        salary: "Not Disclosed",
        location: ["Remote", "Bengaluru, IN"],
        posted: new Date('2024-08-08 13:00:00'),
        description: "Python Developer",
        skills: [
            "Proficiency in Python programming",
            "Experience with web application frameworks such as Django or Flask",
            "Understanding of code versioning tools, such as Git",
            "Knowledge of relational databases and SQL"
        ],
        roles: [
            "Design, develop, test, and maintain software applications using Python",
            "Collaborate with cross-functional teams in an agile environment",
            "Write reusable, efficient, and scalable code",
            "Troubleshoot and debug applications",
            "Participate in code and design reviews"
        ],
        applicants: ['e1'],
    },
    {
        id: 'j2',
        created: 'c2',
        title: "Frontend Developer",
        company: "ABC Corp",
        type: "Contract",
        experience: "2-4 Years",
        education: "Bachelor",
        salary: "₹6-8 LPA",
        location: ["Mumbai, IN"],
        posted: new Date('2024-07-15 09:00:00'),
        description: "Frontend Developer",
        skills: [
            "Proficiency in HTML, CSS, JavaScript",
            "Experience with React.js or Angular",
            "Understanding of responsive design and cross-browser compatibility",
            "Knowledge of version control systems like Git"
        ],
        roles: [
            "Develop user-friendly web interfaces",
            "Ensure design consistency across platforms",
            "Optimize applications for maximum speed and scalability",
            "Collaborate with backend developers to integrate APIs",
            "Conduct code reviews and ensure adherence to best practices"
        ],
        applicants: ['e2', 'e3'],
    },
    {
        id: 'j3',
        created: 'c1',
        title: "Data Analyst",
        company: "XYZ Solutions",
        type: "Full Time",
        experience: "1-3 Years",
        education: "Bachelor",
        salary: "₹5-7 LPA",
        location: ["Remote", "Delhi, IN"],
        posted: new Date('2024-08-01 10:00:00'),
        description: "Data Analyst",
        skills: [
            "Proficiency in SQL and Excel",
            "Experience with data visualization tools like Power BI or Tableau",
            "Understanding of data warehousing concepts",
            "Knowledge of statistical methods and analysis"
        ],
        roles: [
            "Analyze large datasets to derive actionable insights",
            "Create visualizations and reports to communicate findings",
            "Collaborate with business teams to understand data needs",
            "Maintain and optimize existing data pipelines",
            "Assist in the development of data-driven strategies"
        ],
        applicants: ['e4'],
    },
    {
        id: 'j4',
        created: 'c4',
        title: "DevOps Engineer",
        company: "Techwave",
        type: "Full Time",
        experience: "3-5 Years",
        education: "Bachelor",
        salary: "₹10-12 LPA",
        location: ["Bengaluru, IN"],
        posted: new Date('2024-08-05 15:30:00'),
        description: "DevOps Engineer",
        skills: [
            "Proficiency in CI/CD tools like Jenkins or GitLab",
            "Experience with containerization tools like Docker and Kubernetes",
            "Understanding of cloud platforms like AWS, Azure, or GCP",
            "Knowledge of scripting languages like Python or Bash"
        ],
        roles: [
            "Automate deployment pipelines and streamline processes",
            "Monitor system performance and troubleshoot issues",
            "Collaborate with development teams to ensure seamless integration",
            "Manage cloud infrastructure and optimize resource usage",
            "Implement security best practices and ensure compliance"
        ],
        applicants: ['e5'],
    }
];

const JobDetails = () =>{
    const auth=useContext(AuthContext);

    const jid=useParams().jobId;

    const job=JOBS.find((j)=>jid===j.id);

    if(!job){
        return <h1>404 Error</h1>
    }

    const timeAgo=<TimeAgo date={job.posted} />
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
                        Posted(jid)===true ?
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