import React from 'react';

import JobItem from './job-item';

const JobItemList = (props) =>{
    return (
        <div>
            {props.jobs.map((job)=>(
                <JobItem key={job.id} job={job} />
            ))}
        </div>
    );
}

export default JobItemList;