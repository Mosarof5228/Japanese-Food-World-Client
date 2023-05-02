import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecepieCard from './RecepieCard';


const RecepieDetails = () => {
    const chief = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, num_of_recipes, likes, short_bio, id, recipes } = chief;
    console.log(chief)
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto w-75 g-4 my-3'>
                {
                    recipes.map(recipe => <RecepieCard
                        key={recipe.id}
                        recipe={recipe}
                    ></RecepieCard>)
                }
            </div>
        </div>
    );
};

export default RecepieDetails;