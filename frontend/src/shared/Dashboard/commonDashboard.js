import React from 'react';

import PostJobs from '../../user/employer/post-job';

import CardGroup from '../UI/CardGroup';

const commonDashboard = () =>{

    return (
        <div className='m-3 shadow-sm'>
            <CardGroup 
                header="Welcome to the Job Portal"
                title="Find the job you're looking for"
                footer="Read More...">
                    <p>Here are some popular jobs right now </p>
                    <PostJobs nos={9}/>
            </CardGroup>
        </div>
    )
}

export default commonDashboard;