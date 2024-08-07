import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';

import NavMain from './shared/Navigation/NavMain';
import CommonDashboard from './shared/Dashboard/CommonDashboard';
import EditProfile from './shared/profile/EditProfile';

const App = () => {
  return (
    <BrowserRouter>
      <NavMain />
      <main>
        <Routes>
          <Route path='/' exact element={<CommonDashboard />} />
          <Route path='/profile' exact element={<EditProfile />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
