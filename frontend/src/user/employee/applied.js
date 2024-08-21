import { useContext, useEffect, useState } from 'react'

import {AuthContext} from '../../shared/context/auth-context';

export const Applied= (jid)=>{
    const auth=useContext(AuthContext)
    const [emp,setEmp]=useState(null);
    const [job,setJob]=useState(false);
    const jobId=jid;

    useEffect(()=>{
      const getEmp = async ()=>{
        try{
          const response=await fetch(`http://localhost:5000/api/employee/${auth.userTypeId}`);
          const data=await response.json()
          setEmp(data)
          
          if(data){
            if(data.applications.includes(jobId)){ 
              setJob(true)
            } else{
              setJob(false)
            }
          }
        } catch(err){
          console.log(err);
        }
      }
      getEmp()
    },[auth.userTypeId,jobId])
    return job;
}