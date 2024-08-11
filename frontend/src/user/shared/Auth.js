import React, { useState, useContext } from 'react';

import { AuthContext } from '../../shared/context/auth-context';

import Card from '../../shared/UI/Card';
import Input from '../../shared/FormElems/Input';
import Button from '../../shared/FormElems/Button';

const Auth = () =>{
    const auth=useContext(AuthContext);

    const [loginMode,setLoginMode]=useState(true);
    const [formData,setFormData]=useState({
        name:'',
        userType:'',
        email:'',
        password:'',
    })

    const loginHandler = () =>{
        setLoginMode(prevMode=>!prevMode);
    }

    const inputChangeHandler = (event) =>{
        const {name,value}=event.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
    }

    const submitHandler = event =>{
        event.preventDefault();
        auth.login();
    }

    return (
        <div className='container col-lg-6'>
            <Card 
                classnames="m-3 "
                footer={
                    <div className='d-flex justify-content-between'>
                        <span>{loginMode ? "Don't have an account? Sign Up instead" : "Have an account? Login instead"}</span>
                        <Button type='button' className='mx-2 btn-sm btn-outline-primary' inverse onClick={loginHandler} >{!loginMode ? 'Login' : 'Sign Up'}</Button>
                    </div>
                }
            >
                <h1>{loginMode ? 'Login' : 'Sign Up'}</h1> <br />
                <form className='form needs-validation' onSubmit={submitHandler}>
                    {!loginMode &&
                        <Input classnames='col-md-7' type='text' label='Full Name' name='name' value={formData.name} onChange={inputChangeHandler} />
                    }
                    {!loginMode &&
                        <div className='col-6 mb-3'>
                            <label className='form-label'>User Role</label>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' name='userType' value='Employer' required onChange={inputChangeHandler}/>
                                <label className='form-check-label' htmlFor='employer'>Employer</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' name='userType' value='Employee' required onChange={inputChangeHandler}/>
                                <label className='form-check-label' htmlFor='employee'>Employee</label>
                            </div>
                        </div>
                    }
                    <Input className='is-invalid col-md-7' type='email' label='Email' name='email' invalid='Please enter a valid email' required value={formData.email} onChange={inputChangeHandler} />
                    <Input classnames='col-md-7' type='password' label='Password' name='password' required min={6} invalid='Password should be at least 6 characters' onChange={inputChangeHandler}/>
                    <Button className='btn-primary' type='submit'>{loginMode ? 'Login' : 'Sign Up'}</Button>
                </form>
            </Card>
        </div>
    )
};

export default Auth;