import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaStarHalf } from "react-icons/fa";


const RecepieCard = ({ recipe }) => {
    const [disabled, setDisabled] = useState(false);
    const { recipe_picture, recipe_name, cooking_method, ingredients, rating } = recipe;

    const favoriteBtn = () => {
        toast("This is my Favorite recipe");
        setDisabled(true);
    }
    return (
        <div>
            <Card className='position-relative mt-4' style={{ height: "550px" }}>
                <Card.Body>
                    <Card.Title>{recipe_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Gradients</Card.Subtitle>
                    <ul>
                        {ingredients.map((gradient, index) => (
                            <li key={index}>{gradient}</li>
                        ))}
                    </ul>
                    <Card.Text>{cooking_method}</Card.Text>
                    <ToastContainer></ToastContainer>
                    <div className='d-flex  gap-4'>
                        <h5>Raging: {rating}</h5>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaStarHalf></FaStarHalf>}
                            placeholderSymbol={<FaStar className='text-warning' ></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>

                    <Button onClick={favoriteBtn} disabled={disabled} className="position-absolute bottom-0 w-75 mx-auto mb-2" variant="primary">Favorite</Button>



                </Card.Body>
            </Card>
        </div>
    )
}

export default RecepieCard;


