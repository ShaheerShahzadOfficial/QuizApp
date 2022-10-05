import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ isAuthenticated,children,user,isStudent,isAdmin,isSuperAdmin }) => {
  if (!isAuthenticated) {
    return <Navigate to={'/login'} />
  }

  if (user) {
    if (user?.role === 'Student' && isStudent !== true) {
      return <Navigate to={'/Student/Home'} />
    } else if (user?.role === 'Admin' && isAdmin !== true) {
      return <Navigate to={'/Admin/Dashboard'} />
    } else if (user?.role === 'SuperAdmin' && isSuperAdmin !== true) {
      return <Navigate to={'/SuperAdmin/dashboard'} />
    }
  }



  return  children 
}

export default ProtectedRoute
