import React from 'react';

import JobItem from './job-item';

const JobItemList = (props) =>{
    return (
        <React.Fragment>
            {props.jobs.map((job)=>(
                <JobItem key={job._id} job={job}/>
            ))}
        </React.Fragment>
    );
}

export default JobItemList;