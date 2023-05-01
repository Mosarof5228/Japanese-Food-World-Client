import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import author from '../../assets/author image.jpg'

const Banner = () => {
    return (
        <Container className='mt-4'>
            <Row className='d-flex justify-content-between '>
                <Col lg={8}>
                    <div className='banner-image'></div>
                </Col>
                <Col lg={4}>
                    <div className='d-flex flex-column'>
                        <img src={author} alt='author image' />
                        <div className='text-center mt-2'>
                            <h4>Mr.Tim Wang</h4>
                            <p>Fusce mauris auctor ollicituder teary iner hendrerit risusey aeenean rauctor mauris pibus doloer.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;