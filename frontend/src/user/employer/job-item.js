import React from 'react';
import {Link} from 'react-router-dom';

import TimeAgo from '../../shared/Util/TimeAgo';

import Card from '../../shared/UI/Card';

const JobItem = (props) =>{

    const job=props.job;

    const timeAgo=<TimeAgo date={job.posted} />

    return ( 
        <Link to={`/jobs/${job.id}`} className='text-dark'>
            <Card 
                classnames="col-12 col-sm-6 col-md-4 d-inline-flex"
                title={job.title}
                company={job.company}
                footer={timeAgo}>
                <span className='bi bi-clock'> {job.type}</span><br />
                <span className='bi bi-geo-alt'> {job.location.length>1 ? `${job.location.length} locations`:job.location }</span>
            </Card>
        </Link>
        
    )
}

export default JobItem;