import { useEffect, useState } from "react";
import AppsData from "./AppsData";

const AppsShow = () => {
    const [apps,setApps] = useState([]);
    useEffect(()=> {fetch('appsdata.json').then(res => res.json()).then(data => setApps(data));},[])
    return (
        <div className="w-11/12 lg:w-10/12 mx-auto mt-24">
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-4'>Our All Applications</h2>
            <p className='text-[#627382] text-lg text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
                {
                    apps.map(app => <AppsData key={app.id} app = {app}></AppsData>)
                }
            </div>
        </div>
    );
};

export default AppsShow;