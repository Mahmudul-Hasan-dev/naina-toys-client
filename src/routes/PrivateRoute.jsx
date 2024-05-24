import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="success" />
    }

    if(user){
        return children;
    }
    return <>
   
   {alert('You have to log in first to view details')}
    <Navigate state={{from: location}} to="/login" replace></Navigate>;
    </>

}
export default PrivateRoute;