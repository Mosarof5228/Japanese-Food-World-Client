import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../shared/TopNavbar/TopNavbar';

const LoginLayout = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;