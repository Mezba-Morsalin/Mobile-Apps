import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';
const AppsData = ({app}) => {
    return (
        <div className='border border-gray-300 rounded-xl p-8 space-y-3.5'>
                    <div className='bg-white p-8 rounded-xl'>
                        <img className='w-54 mx-auto' src={app.image} alt={app.image} />
                    </div>
                    <h2 className='text-xl font-semibold'>{app.title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='flex gap-2.5 items-center bg-white p-3 rounded-xl text-green-500'><FaDownload></FaDownload> {app.downloads}</p>
                        <p className='flex gap-2.5 items-center bg-orange-100 text-orange-500 p-3 rounded-xl'><GoStarFill></GoStarFill> {app.ratingAvg}</p>
                    </div>
                </div>
    );
};

export default AppsData;