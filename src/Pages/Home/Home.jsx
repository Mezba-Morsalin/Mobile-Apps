import React, { lazy, Suspense } from 'react';
import Banner from '../../assets/Components/Shared/Banner/Banner';
import Stats from '../../assets/Components/Shared/Stats/Stats';

const AppsShow = lazy(()=> import('../../assets/Components/Shared/Apps/AppsShow'))

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <Suspense fallback={
        <div className="flex justify-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }>
        <AppsShow/>
      </Suspense>
        </div>
    );
};

export default Home;