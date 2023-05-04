import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FavoriteFood = () => {
    const foods = [
        {
            id: 1,
            name: 'Sushi',
            description: 'A Japanese dish consisting of small balls or rolls of vinegar-flavored cold rice served with a garnish of vegetables, egg, or raw seafood.',
            image: 'https://source.unsplash.com/featured/?japanese-food'
        },
        {
            id: 2,
            name: 'Ramen',
            description: 'A Japanese soup dish consisting of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with ingredients such as sliced pork, dried seaweed, and green onions.',
            image: 'https://source.unsplash.com/featured/?ramen'
        },
        {
            id: 3,
            name: 'Tempura',
            description: 'A Japanese dish consisting of seafood or vegetables that have been battered and deep-fried.',
            image: 'https://source.unsplash.com/featured/?tempura'
        }
    ];
    return (
        <Container>
            <h2 className="text-center mb-4">Favorite Japanese Foods</h2>
            <Row>
                {foods.map(food => (
                    <Col key={food.id} xs={12} md={4}>
                        <Card style={{ height: "500px", position: "relative" }} className="mb-4 position-relative">
                            <Card.Img style={{ height: '200px' }} variant="top" src={food.image} />
                            <Card.Body>
                                <Card.Title>{food.name}</Card.Title>
                                <Card.Text>{food.description}</Card.Text>
                                <Button className="position-absolute bottom-0 w-75 mx-auto mb-2" variant="primary">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FavoriteFood;