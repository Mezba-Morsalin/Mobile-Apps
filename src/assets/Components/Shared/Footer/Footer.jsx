import React from 'react';
import { Link } from 'react-router';
import footerLogo from '../../../images/logo.png'
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#001931] mt-14'>
            <div className='flex justify-between items-center w-11/12 lg:w-10/12 mx-auto border-b-2 border-[#627382] py-14'>
                <div>
                    <Link to= '/' className='flex items-center gap-2.5'>
                        <img className='w-10' src={footerLogo} alt= {footerLogo} />
                        <p className='text-white text-lg font-bold'>Apps Store</p>
                    </Link>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl text-white font-semibold'>Social Links</h3>
                    <div className='flex gap-3'>
                        <a className='text-black bg-white text-lg p-3 rounded-full' href="#"><FaSquareXTwitter /></a>
                        <a className='text-black bg-white text-lg p-3 rounded-full' href="#"><FaLinkedin /></a>
                        <a className='text-black bg-white text-lg p-3 rounded-full' href="#"><FaFacebook /></a>
                    </div>
                </div>
            </div>
            <p className='text-white text-center py-4'>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;