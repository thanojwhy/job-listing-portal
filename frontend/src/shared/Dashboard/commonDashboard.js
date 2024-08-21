import React from 'react';

import JobItemList from '../../user/employer/job-item-list';

const commonDashboard = (props) =>{

    return (
        <div className='shadow p-3 m-3'>
            <p>Here are some popular jobs right now </p>
            <div className='row row-cols-1 row-cols-md-2'>
                <JobItemList jobs={props.jobs}/>
            </div>
        </div>
    )
}

export default commonDashboard;