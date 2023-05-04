import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Chiefs from '../Chiefs/Chiefs';
import FoodSection from '../FoodSection/FoodSection';
import MainBanner from '../MainBanner/MainBanner';


const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <FoodSection></FoodSection>
            <Banner></Banner>
            <Chiefs></Chiefs>
            <Footer></Footer>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;