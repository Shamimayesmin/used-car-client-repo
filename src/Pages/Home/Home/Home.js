import React from 'react';
import Advertise from '../../DashboardMenu/SellerMenu/Advertise';
import Review from '../../Shared/Review/Review';
import Update from '../../Shared/Update/Update';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Other from '../Other/Other';
import NewFeture from '../NewFeture/NewFeture';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Other></Other>
            <Advertise></Advertise>
            <Review></Review>
            <Update></Update>
            <NewFeture/>
            
            
        </div>
    );
};

export default Home;