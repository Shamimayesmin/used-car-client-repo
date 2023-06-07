import React from 'react';
import Advertise from '../../DashboardMenu/SellerMenu/Advertise';
import Review from '../../Shared/Review/Review';
import Update from '../../Shared/Update/Update';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

import PlaceForEverything from '../PlaceForEverything/PlaceForEverything';
import GoAnyWhere from '../GoAnyWhere/GoAnyWhere';
import Other from '../Other/Other';
// import Feature from '../Feature/Feature';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <GoAnyWhere/>
            <Other></Other>
            <Advertise></Advertise>
            <PlaceForEverything/>
            {/* <Feature/> */}
            <Review></Review>
             
            <Update></Update>
            
            
        </div>
    );
};

export default Home;