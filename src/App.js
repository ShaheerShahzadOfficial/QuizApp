import './App.css';
import React from "react";
import SignUp from './Screens/Authentication/SignUp/SignUp';
import SignIn from './Screens/Authentication/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Users/Home';
import DashBoard from './Screens/Admin/DashBoard';
import SuperAdminDashboard from './Screens/SuperAdmin/SuperAdminDashboard';
import CourseDetail from './Screens/Users/CourseDetail/CourseDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={<Home/>} />
        <Route path='course/:name' element={<CourseDetail/>} />
        <Route path='/admin/dashboard' element={<DashBoard/>} />
        <Route path='/SuperAdmin/dashboard' element={<SuperAdminDashboard/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
