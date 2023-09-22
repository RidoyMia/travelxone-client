import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryPlce from '../CountryTour/CountryPlce';

const Searching = () => {
    const{search} = useParams();
    const[tour,setTour] = useState([]);
    useEffect(()=>{
        fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/tour/alltour?searchText=${search}`).then(res => res.json()).then(data => {
            console.log(data?.data?.result)
            setTour(data?.data?.result)
        })
    },[search])
    return (
        <div>
           
            <div className='grid py-20 grid-cols-1 te xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-5 md:gap-4 xl:gap-16'>
            {tour?.length? tour?.map(t => <CountryPlce country={t?.country} place={t}></CountryPlce>) : <h1></h1>}
            </div>
        </div>
    );
};

export default Searching;