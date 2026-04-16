import React from 'react';
import playStore from './../../../images/Playstore.png'
import appStore from './../../../images/Appstore.png'
import bannerImg from '../../../images/hero.png'
const Banner = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-18'>
            <div className='flex flex-col justify-center items-center gap-14'>
                <div className='text-center space-y-4'>
                    <h2 className='text-6xl font-bold'>We Build</h2>
                <h2 className='text-6xl font-bold leading-18'><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h2>
                <p className='text-[#627382] w-full lg:w-[850px] leading-7'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
               <div className='flex justify-center items-center gap-4'>
                 <button className='flex items-center gap-3 text-lg font-bold cursor-pointer  border border-gray-300 rounded px-4 py-2 transition duration-300 hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white'><img src={playStore} alt="" /><span>Play Store</span></button>
                <button className='flex items-center gap-3 text-lg font-bold cursor-pointer border border-gray-300 rounded px-4 py-2 transition duration-300 hover:bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:text-white '><img src={appStore} alt="" /><span>App Store</span></button>
               </div>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;