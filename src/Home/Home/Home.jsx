import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Chiefs from '../Chiefs/Chiefs';
import FavoriteFood from '../FavoriteFood/FavoriteFood';
import FoodSection from '../FoodSection/FoodSection';
import MainBanner from '../MainBanner/MainBanner';


const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <FoodSection></FoodSection>
            <Banner></Banner>
            <Chiefs></Chiefs>
            <FavoriteFood></FavoriteFood>
            <Footer></Footer>

        </div>
    );
};

export default Home;