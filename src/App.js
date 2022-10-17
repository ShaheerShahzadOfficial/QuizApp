import './App.css'
import React, { useEffect } from 'react'
import SignUp from './Screens/Auth/Register'
import SignIn from './Screens/Auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Screens/Student/Home'
import DashBoard from './Screens/Admin/Dashboard'
import SuperAdminDashboard from './Screens/SuperAdmin/dashboard'
import Name from './Screens/Student/StartQuiz/quiz'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LoadUser } from './Redux/Actions/Auth'
import ProtectedRoute from "./Routes/ProtectedRoute"
import Entry from './Screens/Student/EnterKey/Entry'
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.Auth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(LoadUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route  path="/login" element={<SignIn />} />
        <Route exact  path="/Student/Home" element={
        <ProtectedRoute isAuthenticated={isAuthenticated} user={user} isStudent={true}>
        <Home />
        </ProtectedRoute>} />
        <Route exact path="/Admin/dashboard"  element={ <ProtectedRoute isAuthenticated={isAuthenticated} user={user} isAdmin={true}> <DashBoard /> </ProtectedRoute>} />
        <Route exact path="/SuperAdmin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} isSuperAdmin={true}> <SuperAdminDashboard /> </ProtectedRoute>} />
        <Route exact path="/Student/StartQuiz/:name" element={<ProtectedRoute isAuthenticated={isAuthenticated} user={user} isStudent={true}> <Name /> </ProtectedRoute>} />
      <Route exact path='/Student/EnterKey/:name'  element={<Entry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
