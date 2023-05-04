import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import author from '../../assets/author image.jpg'
import banner from '../../assets/bannerimage2.jpg'

const Banner = () => {
    return (
        <Container className='mt-4 banner'>
            <Row className='d-flex justify-content-between '>
                <Col lg={8}>
                    <div style={{ backgroundImage: `url(${banner})`, height: "100%" }} className='banner-image'>
                        <div className='d-flex flex-column justify-content-center align-items-center font-weight-bold'>
                            <h2>Stop Waisting Your time <br></br> While thinking <br></br> what to cook....</h2>
                            <p><small>1."Discover the Flavors of Japan: From Sushi to Ramen!"</small></p>
                            <p><small>"Savor the Best of Japan's Cuisine with Our Authentic Recipes!"</small></p>
                            <p><small>"Experience the Rich Culinary Heritage of Japan with Our Handpicked Selection of Recipes!"</small></p>
                        </div>
                    </div>
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