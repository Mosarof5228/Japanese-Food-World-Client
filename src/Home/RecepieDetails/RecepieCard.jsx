import React from 'react';


const RecepieCard = ({ recipe }) => {
    const { recipe_picture, recipe_name, cooking_method, ingredients, rating } = recipe;
    return (

        <div classNam="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={recipe_picture} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{recipe_name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default RecepieCard;