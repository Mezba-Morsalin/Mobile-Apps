import React from 'react';
import Banner from '../../assets/Components/Shared/Banner/Banner';
import Stats from '../../assets/Components/Shared/Stats/Stats';
import AppsShow from '../../assets/Components/Shared/Apps/AppsShow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <AppsShow></AppsShow>
        </div>
    );
};

export default Home;