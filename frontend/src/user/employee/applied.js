import { useContext } from 'react'

import {AuthContext} from '../../shared/context/auth-context';

const EMPS = [
    {
      id: 'e1',
      userId:'u1',
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
      applications: ['j1','j2'],
    }
  ]

export const Applied=(jid)=>{
    const auth=useContext(AuthContext)
    const jobId=jid;

    const emp=EMPS.find(emp=>emp.id===auth.userTypeId);
    if(emp){ 
        return emp.applications.includes(jobId)
    } else{
        return false
    }
}