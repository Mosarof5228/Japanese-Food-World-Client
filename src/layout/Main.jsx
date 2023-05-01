import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';
import TopNavbar from '../shared/TopNavbar/TopNavbar';

const Main = () => {
    return (
        <Container>
            <TopNavbar></TopNavbar>
            <Banner></Banner>
        </Container>
    );
};

export default Main;