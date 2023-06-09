import React from 'react';
import Banner from '../Carousel/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import LatestNews from './../LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;