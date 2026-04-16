
import React from 'react';
import { useLoaderData } from 'react-router';
import AppData from './AppData';

const AllApps = () => {
    const apps = useLoaderData();
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-20'>
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>Our All Applications</h2>
            <p className='text-[#627382] text-lg text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center mt-12'>
                <h2 className='text-2xl font-bold'>({apps.length}) Apps Found</h2>
                <div className="dropdown dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            </div>
            <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
                {
                    apps.map(app => <AppData key={app.id} app = {app}></AppData>)
                }
            </div>
        </div>
    );
};

export default AllApps;