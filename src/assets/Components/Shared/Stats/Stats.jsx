import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-14'>
                <h2 className='text-white font-bold text-4xl leading-14 md:text-6xl text-center mb-12'>Trusted by Millions, Built for You</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className='text-center space-y-3'>
                        <p className='text-white space-y-3'>Total Downloads</p>
                        <h3 className='text-white font-bold text-6xl'>29.6M</h3>
                        <p className='text-white'>21% more than last month</p>
                    </div>
                    <div className='text-center space-y-3'>
                        <p className='text-white'>Total Reviews</p>
                        <h3 className='text-white font-bold text-6xl'>906K</h3>
                        <p className='text-white'>46% more than last month</p>
                    </div>
                    <div className='text-center space-y-3'>
                        <p className='text-white'>Active Apps</p>
                        <h3 className='text-white font-bold text-6xl'>132+</h3>
                        <p className='text-white'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;