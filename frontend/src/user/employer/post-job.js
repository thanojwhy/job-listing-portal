import React from 'react';

import Card from '../../shared/UI/Card';

const PostJobs = (props) =>{
    const rows=[]
    for(let i=0;i<props.nos;i++){
        rows.push(<h1>Jobs</h1>);
    }
    return (
        <div>
            {rows.map((job,index)=>(
                <Card classnames="col-12 col-md-4" key={index}>{job}{index+1}</Card>
            ))}
        </div>
    );
}

export default PostJobs;