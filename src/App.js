import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {   Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet } from 'react-router-dom'
import UserLogin from './UserLogin';
import DashBoard from './DashBoard';
import List from './list';
function PrivateRoute({ children, ...rest }) {

  const userDetailReducer = useSelector(state => state.userLoginReducer)
  return userDetailReducer?.action?.value?.email !=="" && userDetailReducer?.action?.value?.email !==undefined ? children : <Navigate to="/" />;
}
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLogin />}/>
          <Route path='/UserLogin' element={<UserLogin />}/>
          <Route path="/dashboard" element={  <PrivateRoute>
            <DashBoard />
         </PrivateRoute>}  />
        
          <Route path="/list" element={  <PrivateRoute>
            <List />
         </PrivateRoute>}  />
        

          <Route path='*' element={<h1>Error 404 Page not Found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
