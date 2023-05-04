import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../../shared/Footer/Footer';
import './NotFoundPage.css'

const NotFoundPage = () => {
    const images = [
        'https://i.ibb.co/LNSHTT8/img1.png',
        'https://i.ibb.co/yym5Pf5/img2.png',
        'https://i.ibb.co/0DvcpN0/img3.png',
        'https://i.ibb.co/4VQxxYm/img4.png',
        'https://i.ibb.co/VBq2M8Y/img5.jpg',
        ' https://i.ibb.co/LgTtqXT/img6.jpg',
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    return (
        <Container className="my-2">
            <Row className='notFoundPagePage'>
                <Col md={6}>
                    <Image className='img-fluid' src={randomImage} fluid />
                    <h3 className='fs-2 fw-bold'><span className='text-center text-danger fw-bold fs-1'>404 </span><br />Ooops! You Weren't supposed to see this.Try Agaian please</h3>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <div>
                        <h1 className="display-4 mb-3 fw-bold">Oops! Page Not Found</h1>
                        <p className="lead">We can't seem to find the page you're looking for.</p>
                        <p>Please check the URL or go back to the homepage.</p>
                        <a href="/" className="btn btn-primary mt-3">
                            Go to Homepage
                        </a>
                    </div>
                </Col>
            </Row>
            <div className='mt-4'>
                <Footer></Footer>
            </div>
        </Container>
    );
};

export default NotFoundPage;