import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Outlet, useNavigation } from 'react-router-dom';
import TopNavbar from '../shared/TopNavbar/TopNavbar';

const Main = () => {
    const navigation = useNavigation();
    return (

        <div>
            <TopNavbar></TopNavbar>
            <div>{navigation.state === 'loading' && <Spinner animation="border" variant="primary" />}</div>
            <Outlet></Outlet>
        </div>

    );
};

export default Main;