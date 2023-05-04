import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <Container className="bg-dark text-white py-5 mt-2 rounded">
            <Row>
                <Col md={4}>
                    <h5>About Us</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </Col>
                <Col md={4}>
                    <h5>Menu</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Sushi</a></li>
                        <li><a href="#">Ramen</a></li>
                        <li><a href="#">Udon</a></li>
                        <li><a href="#">Tempura</a></li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li>123 Main St.</li>
                        <li>Tokyo, Japan 12345</li>
                        <li>(555) 555-5555</li>
                        <li>info@japanesefood.com</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    <p className="text-center">© 2023 Japanese Food. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;