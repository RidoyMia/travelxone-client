import React, { useContext, useState } from 'react';
import { AuthContextElement } from '../../Context/AuthContext';

const Order = () => {
    const{user} = useContext(AuthContextElement);
    const[orders,setOrders] = useState([])
    const accesstoken = localStorage.getItem('travelaccesstoken')

    fetch('http://localhost:5000/api/v1/order/getorder',{
        headers : {
            "Authorization": `Bearer ${accesstoken}`
        }
    }).then(res => res.json()).then(data =>{
       setOrders(data?.data)
       console.log(data)
    })


    return (
        <div className='px-5 lg:px-16 md:px-10'>
            <h1 className='py-20 text-center text-white'>Orders</h1>
            {orders?.length? orders?.map((o,index) =><div className='py-10 px-3 lg:px-10 md:px-5 shadow-2xl hover:animate-pulse flex justify-between items-center align-middle bg-blue-400 text-black  my-10'>
            <img src={o?.TourId.Pictures[index]} className='w-20 lg:w-32 md:w-32 h-[100px] lg:h-[150px] md:h-[150px]'></img>
            <div>
                <h1 className='text-lg text-gray-200 font-semibold'>Country : {o?.TourId?.Country}</h1>
                <h1 className=' text-gray-200'>Place : {o?.TourId?.DivissionId}</h1>
                <p className=' text-gray-200'>Price :<span className='font-semibold'> ${o?.total}</span></p>
                <p className=' text-gray-200'>Peoples : {o?.size}</p>

                <h3 className=' text-green-700 font-semibold'>Status : pending</h3>
            </div>
            </div>) : ''}
        </div>
    );
};

export default Order;