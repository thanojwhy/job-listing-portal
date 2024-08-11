import React from 'react';

import Input from '../../shared/FormElems/Input';
import Button from '../../shared/FormElems/Button';

const Profile = (props) =>{

    const {EMP}=props;

    return (
        <div className='container-lg col-lg-8'>
            <div className='m-3 p-3 shadow'>
                <div className='d-flex justify-content-between mb-3'>
                    <h2 className='text-success'>Job Profile</h2>
                    <Button className='btn-success'>Update</Button>
                </div>
                <form>
                    <h4>-&gt;Basic Details</h4>
                    <div className='row '>
                        <div className='col-6 col-md-3'><Input label='First Name' type='text' value={EMP.name.first} /></div>
                        <div className='col-6 col-md-3'><Input label='Last Name' type='text' value={EMP.name.last} /></div>
                        <div className='col-8 col-md-4'><Input label='Mail' type='email' value={EMP.email} /></div>
                        <div className='col-4 col-md-2'><Input label='Location' type='text' value={EMP.location} /></div>
                    </div>
                    <h4>-&gt;Education</h4>
                    <div className='mb-3'>
                    {EMP.education.map((edu,index)=>{
                        return (
                            <div key={index} className='row border rounded pt-3 m-1'>
                                <div className='col-9 col-md-5'><Input label='Degree' type='text' value={edu.degree}/></div>
                                <div className='col-3 col-md-2'><Input label='CGPA' type='text' value={edu.cgpa}/></div>
                                <div className='col-12 col-md-5'><Input label='Institution' type='text' value={edu.institution}/></div>
                                <div className='col-6'><Input label='Start Date' type='date' value={edu.startDate}/></div>
                                <div className='col-6'><Input label='End Date' type='date' value={edu.endDate}/></div>
                            </div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Experience</h4>
                    <div className='mb-3'>
                    {EMP.experience.map((exp,index)=>{
                        return (
                            <div key={index} className='row border rounded pt-3 m-1'>
                                <div className='col-4'><Input label='Position' type='text' value={exp.position}/></div>
                                <div className='col-4'><Input label='Company' type='text' value={exp.company}/></div>
                                <div className='col-4'><Input label='Salary' type='text' value={exp.salary}/></div>
                                <div className='col-6'><Input label='Start Date' type='date' value={exp.startDate}/></div>
                                <div className='col-6'><Input label='Exit Date' type='date' value={exp.endDate}/></div>
                            </div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Skills</h4>
                    <div className='mb-3 row'>
                    {EMP.skills.map((skill,index)=>{
                        return (
                            <div className='col-4 col-md-3'><Input label={`Skill ${index+1}`} type='text' value={skill}/></div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Links</h4>
                    <div>
                        <Input label='Linkedin' value={EMP.linkedin} />
                        <Input label='GitHub' value={EMP.gitHub} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;