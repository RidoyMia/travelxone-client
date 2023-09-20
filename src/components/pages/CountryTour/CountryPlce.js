import React from 'react';
import { useNavigate } from 'react-router-dom';

const CountryPlce = (props) => {

    const {Country,DivissionId,Duration,Pictures,Price,TourType,About,_id} = props?.place;
    const navigate = useNavigate()

    const details = (id)=>{
         console.log(id);
         navigate(`/${props.country}/${id}`)
    }
    return (
       
            <div className=" ho hover:shadow-2xl hover:accent-neutral-focus card w-full  bg-base-100 shadow-xl">
  <figure><img src={Pictures[0]} className='w-full  h-[200px] lg:h-[220px]'  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Place name : {DivissionId}</h2>
    <p>{About.slice(0,60)}...</p>
    <h1 className='font-semibold'>TourType :{TourType} </h1>
    <div className="card-actions justify-end">
    <button class="  bg-blue-700 text-white rounded-sm py-1 px-7 hover:bg-white hover:text-blue-700 " onClick={()=>details(_id)}>Details</button>
    </div>
  </div>
</div>
       
    );
};

export default CountryPlce;