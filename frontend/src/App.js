import React,{useState,useCallback} from 'react'
import {Routes,Route, Navigate, useLocation} from 'react-router-dom';

import NavMain from './shared/Navigation/NavMain';
import CommonDashboard from './shared/Dashboard/CommonDashboard';
import AuthDashboard from './shared/Dashboard/AuthDashboard';
import Jobs from './user/employer/Jobs';
import JobPost from './user/employer/job-post';
import JobDetails from './user/shared/job-details';
import Profile from './user/employee/Profile';
import Auth from './user/shared/Auth';
import { AuthContext } from './shared/context/auth-context';
import { AnimatePresence } from 'framer-motion';
import Animation from './shared/Util/Animation';
import EmployeeDetails from './user/employee/emp-details';

const JOBS = [
  {
      id: 'j1',
      created:'c1',
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
      applicants: ['e1','e2', 'e3'],
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

const USERS = [
  {
    id: 'u1',
    name: 'Kate Abdo',
    email: 'kate@example.com',
    password: '123456',
    type:'Employee'
  },
  {
    id: 'u2',
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
    type:'Employer'
  },
]

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
    gitHub : "https://github.com",
    applications: ['j1','j2'],
  }
]

const EMPR=[
  {
    id: 'c1',
    userId: 'u2',
    name: 'John Doe',
    email: 'john@example.com',
    company: 'ABC',
    location: 'New York',
    posted:['j1','j3']
  }
]

const App = () => {
  const isAuth=localStorage.getItem('isAuth');

  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

  const uid='u2'

  const user=USERS.find((user)=>user.id===uid);
  const emp=EMPS.find(emp=>emp.userId===uid);
  const emr=EMPR.find(emr=>emr.userId===uid);

  const userType=user.type;

  const login = useCallback(()=>{
    setIsLoggedIn(true);
    localStorage.setItem('isAuth',true);
  },[])

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
    localStorage.removeItem('isAuth');
  },[])

  let userTypeId;
  if(user.type==='Employee'){
    userTypeId=emp? emp.id : null;
  } else{
    userTypeId=emr? emr.id : null;
  }

  let routes;

  const jobsByEmployeeId=JOBS.filter((job)=>{
    return job.applicants.find((e)=>{
      return e === userTypeId;
    });
  })

  const jobsByEmployerId=JOBS.filter(job=>job.created===userTypeId);

  if (isLoggedIn){
    if(user.type==='Employee'){
      routes = (
        <React.Fragment>
          <Route path='/' element={<Animation><AuthDashboard EMP={EMPS[0]} /></Animation>} />
          <Route path='/profile' element={<Animation><Profile EMP={EMPS[0]} /></Animation>} />
          <Route path='/jobs' element={<Jobs JOBS={JOBS}/>} />
          <Route path='/jobs/:employeeId/applied' element={<Jobs JOBS={jobsByEmployeeId}/> } />
        </React.Fragment>
      )
    } else {
      routes = (
        <React.Fragment>
          <Route path='/' element={<Animation><AuthDashboard EMPR={EMPR[0]}/></Animation>} />
          <Route path='/jobs' element={<Jobs JOBS={JOBS}/>} />
          <Route path='/job/new' element={<Animation><JobPost/></Animation>} />
          <Route path='/jobs/:employerId/posted' element={<Jobs JOBS={jobsByEmployerId}/> } />
          <Route path='/employee/:employeeId' element={<EmployeeDetails EMPS={EMPS}/>} />
        </React.Fragment>
      )
    }
  } else{
    routes = (
      <React.Fragment>
        <Route path='/' element={<Animation><CommonDashboard /></Animation>} />
        <Route path='/jobs' element={<Jobs JOBS={JOBS}/>} />
        <Route path='/auth' element={<Animation><Auth /></Animation>} />
      </React.Fragment>
    )
  }

  const location=useLocation();

  return (
    <AuthContext.Provider value={{isLoggedIn,userType,userTypeId,login,logout}} >
        <NavMain />
        <main>
          <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
              <Route path='/jobs/:jobId' element={<Animation><JobDetails /></Animation>} />
              {routes}
              <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
          </AnimatePresence>
        </main>
    </AuthContext.Provider>
  );
}

export default App;
