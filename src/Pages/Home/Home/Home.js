import React from 'react';
import Advertise from '../../DashboardMenu/SellerMenu/Advertise';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Other from '../Other/Other';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Other></Other>
            
        </div>
    );
};

export default Home;