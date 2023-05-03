import React from 'react';
import { Button, Card } from 'react-bootstrap';


const RecepieCard = ({ recipe }) => {
    const { recipe_picture, recipe_name, cooking_method, ingredients, rating } = recipe;
    return (
        <Card className='position-relative' style={{ height: "550px" }}>
            <Card.Body>
                <Card.Title>{recipe_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Gradients</Card.Subtitle>
                <ul>
                    {ingredients.map((gradient, index) => (
                        <li key={index}>{gradient}</li>
                    ))}
                </ul>
                <Card.Text>{cooking_method}</Card.Text>
                <Button className="position-absolute bottom-0 w-75 mx-auto mb-2" variant="primary">Cook it!</Button>
            </Card.Body>
        </Card>
    )
}

export default RecepieCard;


