import React,{useState} from 'react';

import Input from '../../shared/FormElems/Input';
import Button from '../../shared/FormElems/Button';

const Profile = (props) =>{
    const {EMP}=props;

    const [formData,setFormData]=useState({
        fname:EMP.name,
        lname:'',
        email:EMP.email,
        location:'',
        education:[{
            degree:'',
            institution:'',
            cgpa:'',
            startDate:'',
            endDate:''
        }],
        experience:[{
            position:'',
            company:'',
            salary:'',
            startDate:'',
            endDate:''
        }],
        skills: ['MERN'],
        linkedin:'',
        gitHub:'',
    })

    const inputChangeHandler = (event,index,section) =>{
        const {name,value}=event.target;
        if (section){
            setFormData((prevData)=>({
                ...prevData,
                [section]:prevData[section].map((item,i)=>
                    i===index ? ( section==='skills' ? value : {...item,[name]:value}) : item
                )
            }))
        } else {
            setFormData((prevData)=>({
                ...prevData,
                [name]:value
            }))
        }
    }

    const updateHandler = event =>{
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='container-lg col-lg-8'>
            <div className='m-3 p-3 shadow'>
                <form onSubmit={updateHandler}>
                    <div className='d-flex justify-content-between mb-3'>
                        <h2 className='text-success'>Job Profile</h2>
                        <Button type='submit' className='btn-success'>Update</Button>
                    </div>
                    <h4>-&gt;Basic Details</h4>
                    <div className='row '>
                        <div className='col-6 col-md-3'><Input label='First Name' type='text' name='fname' value={formData.fname} onChange={inputChangeHandler}/></div>
                        <div className='col-6 col-md-3'><Input label='Last Name' type='text' name='lname' value={formData.lname} onChange={inputChangeHandler}/></div>
                        <div className='col-8 col-md-4'><Input label='Mail' type='email' name='email' value={formData.email} onChange={inputChangeHandler}/></div>
                        <div className='col-4 col-md-2'><Input label='Location' type='text' name='location' value={formData.location} onChange={inputChangeHandler}/></div>
                    </div>
                    <h4>-&gt;Education</h4>
                    <div className='mb-3'>
                    {formData.education.map((edu,index)=>{
                        return (
                            <div key={index} className='row border rounded pt-3 m-1'>
                                <div className='col-9 col-md-5'><Input label='Degree' type='text' name='degree' value={edu.degree} onChange={e=>inputChangeHandler(e,index,'education')}/></div>
                                <div className='col-3 col-md-2'><Input label='CGPA' type='text' name='cgpa' value={edu.cgpa} onChange={e=>inputChangeHandler(e,index,'education')}/></div>
                                <div className='col-12 col-md-5'><Input label='Institution' type='text' name='institution' value={edu.institution} onChange={e=>inputChangeHandler(e,index,'education')}/></div>
                                <div className='col-6'><Input label='Start Date' type='date' name='startDate' value={edu.startDate} onChange={e=>inputChangeHandler(e,index,'education')}/></div>
                                <div className='col-6'><Input label='End Date' type='date' name='endDate' value={edu.endDate} onChange={e=>inputChangeHandler(e,index,'education')}/></div>
                            </div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Experience</h4>
                    <div className='mb-3'>
                    {formData.experience.map((exp,index)=>{
                        return (
                            <div key={index} className='row border rounded pt-3 m-1'>
                                <div className='col-4'><Input label='Position' type='text' name='position' value={exp.position} onChange={e=>inputChangeHandler(e,index,'experience')}/></div>
                                <div className='col-4'><Input label='Company' type='text' name='company' value={exp.company} onChange={e=>inputChangeHandler(e,index,'experience')}/></div>
                                <div className='col-4'><Input label='Salary' type='text' name='salary' value={exp.salary} onChange={e=>inputChangeHandler(e,index,'experience')}/></div>
                                <div className='col-6'><Input label='Start Date' type='date' name='startDate' value={exp.startDate} onChange={e=>inputChangeHandler(e,index,'experience')}/></div>
                                <div className='col-6'><Input label='Exit Date' type='date' name='endDate' value={exp.endDate} onChange={e=>inputChangeHandler(e,index,'experience')}/></div>
                            </div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Skills</h4>
                    <div className='mb-3 row'>
                    {formData.skills.map((skill,index)=>{
                        return (
                            <div key={index} className='col-4 col-md-3'><Input label={`Skill ${index+1}`} type='text' name='skills' value={skill} onChange={e=>inputChangeHandler(e,index,'skills')}/></div>
                        )
                    })}
                    </div>
                    <h4>-&gt;Links</h4>
                    <div>
                        <Input type='url' label='Linkedin' name='linkedin' value={formData.linkedin} onChange={inputChangeHandler}/>
                        <Input type='url' label='GitHub' name='gitHub' value={formData.gitHub} onChange={inputChangeHandler}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile;