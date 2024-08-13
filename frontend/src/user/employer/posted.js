import { useContext } from 'react'

import {AuthContext} from '../../shared/context/auth-context';

const EMPR=[
    {
      id: 'c1',
      userId: 'u2',
      name: 'John Doe',
      email: 'john@example.com',
      company: 'ABC',
      location: 'New York',
      posted:['j1','j3']
    }
]

export const Posted=(jid)=>{
    const auth=useContext(AuthContext)
    const jobId=jid;

    const emr=EMPR.find(emr=>emr.id===auth.userTypeId);
    if(emr){ 
        return emr.posted.includes(jobId)
    } else{
        return false
    }
}