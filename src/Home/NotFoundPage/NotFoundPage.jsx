import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const NotFoundPage = () => {
    const images = [
        'https://source.unsplash.com/800x600/?abstract',
        'https://source.unsplash.com/800x600/?nature',
        'https://source.unsplash.com/800x600/?city',
        'https://source.unsplash.com/800x600/?animals',
        'https://source.unsplash.com/800x600/?food',
        'https://source.unsplash.com/800x600/?technology',
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <Image src={randomImage} fluid />
                </Col>
                <Col md={6}>
                    <h1 className="display-4 mb-3">Oops! Page Not Found</h1>
                    <p className="lead">We can't seem to find the page you're looking for.</p>
                    <p>Please check the URL or go back to the homepage.</p>
                    <a href="/" className="btn btn-primary mt-3">
                        Go to Homepage
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;