import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Divission = () => {
    const navigate = useNavigate()
    const Details = (id)=>{
         navigate(`/touristPlace/${id}`)
    }
    const [divissions,setDivissions] = useState([]);
    useEffect(()=>{
        fetch("country.json").then(res => res.json()).then(data => {
            console.log(data)
            setDivissions(data)
        })
    },[])
    return (
        <div className='container bg-gray-100  py-20 '>
          <div className='text-center'>
                <div></div>
                <div className="flex flex-col w-full border-opacity-50">
                <div className="grid  card  rounded-box place-items-center"><h1 className='text-lg font-semibold text-[blue]'>ABOUT COMPANY</h1></div>
                <div className='flex justify-items-center pb-10 justify-center'>
                <div className="divider h-1 w-10 text-center bg-[blue] align-middle"></div>
                </div>

            </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-5'>
            {
  divissions?.map((d, index) => (
    <div key={index} className="">
      <div className=''>
        <img src={d?.flag} className='h-[100px] lg:h-[300px] md:h-[200px] w-full'></img>
      </div>
    <div className='text-center'>
    <button className='divission-btn text-center align-middle text-sm lg:text-md md:text-md text-white  bg-[blue] py-1  rounded-md px-2 lg:px-16 md:px-10 -mt-20' onClick={()=> Details(d?.Country)}>{d?.Country}</button>
    </div>
    </div>
  ))
}
            </div>
        </div>
    );
};

export default Divission;