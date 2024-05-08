import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const PrivateRoute = ({ roles, children }) => {
  let { user } = useAuth();
  console.log("user user usser",user)

  if (!user && localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"))
  }
  else {
    const data = localStorage.setItem("user", JSON.stringify(user))
    // user = data
     user = JSON.parse(localStorage.getItem("user"))

  }

  console.log(" user khan ", user)
  console.log(" roles khan ", roles)
  // console.log(" props khan ", props )
  console.log(" children  khan ", children.props)

  // Check if user is authenticated and has required role
  const isAuthenticated = user !== null;
  console.log("isAuthenticatedisAuthenticatedisAuthenticatedisAuthenticated",isAuthenticated)
  console.log("useruseruseruser",user)
  const hasRequiredRole = roles ? roles.includes(user?.role) : true;
//  const hasRequiredRole = true
  console.log("hasRequiredRole",hasRequiredRole)

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  if (!hasRequiredRole) {
    return <Navigate to="/" />;
  }


  return children;
};

export default PrivateRoute;