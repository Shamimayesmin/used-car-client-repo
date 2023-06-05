import React from 'react';
import Advertise from '../../DashboardMenu/SellerMenu/Advertise';
import Review from '../../Shared/Review/Review';
import Update from '../../Shared/Update/Update';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Other from '../Other/Other';
import NewFeture from '../NewFeture/NewFeture';
import NewFeatureTwo from '../NewFeatureTwo/NewFeatureTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <NewFeture/>
            {/* <Other></Other> */}
            <Advertise></Advertise>
            <NewFeatureTwo/>
            <Review></Review>
             
            <Update></Update>
            
            
        </div>
    );
};

export default Home;