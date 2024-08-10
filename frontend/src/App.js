import React,{useState,useCallback} from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

import NavMain from './shared/Navigation/NavMain';
import CommonDashboard from './shared/Dashboard/CommonDashboard';
import AuthDashboard from './shared/Dashboard/AuthDashboard';
import Jobs from './user/employer/Jobs';
import JobDetails from './user/shared/job-details';
import EditProfile from './profile/EditProfile';
import Auth from './user/shared/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const isAuth= localStorage.getItem('isAuth');
  const [isLoggedIn, setIsLoggedIn] = useState(isAuth);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
    localStorage.setItem('isAuth',true);
  },[])

  const logout = useCallback(()=>{
    setIsLoggedIn(false);
    localStorage.removeItem('isAuth');
  },[])

  let routes;

  if (isLoggedIn){
    routes = (
      <React.Fragment>
        <Route path='/' element={<AuthDashboard />} />
        <Route path='/profile' element={<EditProfile />} />
      </React.Fragment>
    )
  } else{
    routes = (
      <React.Fragment>
        <Route path='/' element={<CommonDashboard />} />
        <Route path='/auth' element={<Auth />} />
      </React.Fragment>
    )
  }

  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}} >
      <BrowserRouter>
        <NavMain />
        <main>
          <Routes>
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/jobs/:jobId' element={<JobDetails />} />
            {routes}
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
