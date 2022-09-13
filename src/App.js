import './App.css';
import React from "react";
import SignUp from './Screens/Authentication/SignUp/SignUp';
import SignIn from './Screens/Authentication/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
