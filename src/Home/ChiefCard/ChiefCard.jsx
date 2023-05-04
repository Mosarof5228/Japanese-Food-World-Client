import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChiefCard = ({ chief }) => {
    const { chef_picture, chef_name, years_of_experience, num_of_recipes, likes, short_bio, id } = chief;
    return (
        <div>
            <Card className='shadow px-2 py-2' >
                <Card.Img style={{ height: "200px" }} variant="top" src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        <p>Exe. {years_of_experience} Years</p>
                        <p>Recipes {num_of_recipes}</p>
                        <p>Likes {likes}</p>
                    </Card.Text>
                    <Link to={`/chief/${id}`}><Button variant="primary">View Recipes</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChiefCard;