import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChiefCard = ({ chief }) => {
    const { chef_picture, chef_name, years_of_experience, num_of_recipes, likes, short_bio, id } = chief;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to={`/chief/${id}`}><Button variant="primary">Receipe Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChiefCard;