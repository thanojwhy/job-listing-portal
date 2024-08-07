import React from 'react';
import { NavLink } from 'react-router-dom';

const NavNavLinks = () =>{
    return (
        <div className='d-flex justify-content-end col-9 nav nav-pills'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/jobs' className='nav-link'>Jobs</NavLink>
            <NavLink to='/profile' className='nav-link'>Profile</NavLink>
        </div>
    )
}

export default NavNavLinks;