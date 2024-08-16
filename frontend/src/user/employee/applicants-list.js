import React from 'react';

import Applicants from './applicants';

const EMPS = [
    {
      id: 'e1',
      userId: 'u1',
      name: 'Kate Abdo',
      email: 'Katie@example.com',
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
      linkedin : "https://linkedin.com",
      gitHub : "",
      applications: ['j1','j2'],
    }
]



const ApplicantList = (props) =>{
    const {jobId}=props;
    const applicantList = EMPS.filter(applicant => applicant.applications.includes(jobId));
    if(applicantList.length===0){
      return <h3>No Applicants so far</h3>
    }
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Location</td>
          </tr>
        </thead>
        <tbody>
            {applicantList.map(a=>
              <Applicants key={a.id} applicant={a}/>
            )}
        </tbody>
      </table>
    )
}

export default ApplicantList;