import React from 'react';
import './FoodSection.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
const FoodSection = () => {
    return (

        <Container className="bg-light">
            <Row className="justify-content-center foodSection py-4">
                <Col md={8} className="text-center">
                    <h1>Welcome to Our Japanese Food Website!</h1>
                    <p>Discover the authentic flavors of Japan with our wide selection of dishes.</p>
                    <Button variant="primary" className="mx-2">Order Now</Button>
                    <Button variant="outline-primary" className="mx-2">View Menu</Button>
                </Col>
            </Row>

        </Container>

    );
};

export default FoodSection;