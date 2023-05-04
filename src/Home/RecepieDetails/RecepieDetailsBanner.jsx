import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import backgroundImage from "../../assets/receipeDetails2.jpg";
// import userImage from '../../assets/5.jpg';


const RecepieDetailsBanner = ({ chef_picture }) => {
    return (
        <div>
            <section style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <Container>
                    <Row>
                        <Col md={6} className="mx-auto text-center">
                            <Image src={chef_picture} roundedCircle fluid />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default RecepieDetailsBanner;