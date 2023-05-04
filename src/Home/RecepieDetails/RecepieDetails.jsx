import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import RecepieCard from './RecepieCard';
import RecepieDetailsBanner from './RecepieDetailsBanner';


const RecepieDetails = () => {
    const chief = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, num_of_recipes, likes, short_bio, id, recipes } = chief;
    console.log(chief)
    return (
        <div className='container'>
            <RecepieDetailsBanner
                chef_picture={chef_picture}
            ></RecepieDetailsBanner>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto '>
                {
                    recipes.map(recipe => <RecepieCard
                        key={recipe.id}
                        recipe={recipe}
                    ></RecepieCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RecepieDetails;