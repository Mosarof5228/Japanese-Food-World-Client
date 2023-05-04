import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';



const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className='spinner-container '>
            <Spinner animation="grow" variant="info" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivetRoute;