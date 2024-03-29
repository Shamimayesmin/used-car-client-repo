import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Spinner/Loading';
// import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return <Loading></Loading>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
}


export default PrivateRoute;