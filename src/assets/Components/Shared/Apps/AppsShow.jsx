import { useEffect, useState } from "react";
import AppsData from "./AppsData";
import { Link } from "react-router";

const AppsShow = () => {
    const [apps,setApps] = useState([]);
    useEffect(()=> {fetch('appsdata.json').then(res => res.json()).then(data => setApps(data));},[])
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-24">
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>Trending Apps</h2>
            <p className='text-[#627382] text-lg text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
                {
                    apps.map(app => <AppsData key={app.id} app = {app}></AppsData>)
                }
            </div>
            <div className="mt-10 flex justify-center items-center">
                <Link to= '/apps' className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded">Show All Apps</Link>
            </div>
        </div>
    );
};

export default AppsShow;