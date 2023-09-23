import React, { useEffect, useState } from 'react';
import CountryPlce from '../CountryTour/CountryPlce';
import { useNavigate } from 'react-router-dom';

const Tours = () => {
    const [tour,setTour] = useState([]);
    const navigate = useNavigate()
    
        fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/tour/alltour?page=2`).then(res => res.json()).then(data => {
            console.log(data?.data?.result)
            setTour(data?.data?.result)
        
        })
        const update = id =>{
            console.log(id)
            navigate(`/dashboard/admin/update/${id}`)
        }
    
    return (
        <div className='container'>
            { tour?.map((o,index) =><div className='py-10 px-3 lg:px-10 md:px-5 rounded-lg shadow-2xl hover:animate-pulse flex justify-between items-center align-middle bg-blue-400 text-black  my-10'>
            <img src={o?.Pictures[3]} className='w-20 lg:w-32 md:w-32 h-[100px] lg:h-[150px] md:h-[150px]'></img>
            <div>
                <h1 className='text-lg text-gray-200 font-semibold'>Country : {o?.Country}</h1>
                <h1 className=' text-gray-200'>Place : {o?.DivissionId}</h1>
                <p className=' text-gray-200'>Price :<span className='font-semibold'> ${o?.Price}</span></p>
                <p className=' text-gray-200'>Peoples : {o?.TourType}</p>

                <div className='flex justify-center mt-2'>
                    
                <button className='py-1 px-3 bg-blue-500  hover:bg-white  hover:text-yellow-600  rounded-md  text-white' onClick={()=>update(o?._id)}>Update</button>
                <button className='py-1 px-3 bg-blue-500  hover:bg-white  hover:text-yellow-600  rounded-md mx-2 text-white'>Delete</button>
                </div>
            </div>
            </div>) }
        </div>
    );
};

export default Tours;