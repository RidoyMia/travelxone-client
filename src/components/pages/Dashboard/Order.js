import React, { useContext, useState } from 'react';
import { AuthContextElement } from '../../Context/AuthContext';

const Order = () => {
    const{user} = useContext(AuthContextElement);
    const[orders,setOrders] = useState([])
    const accesstoken = localStorage.getItem('travelaccesstoken')

    fetch('http://localhost:4000/api/v1/order/getorder',{
        headers : {
            "Authorization": `Bearer ${accesstoken}`
        }
    }).then(res => res.json()).then(data =>{
       setOrders(data?.data)
    })


    return (
        <div>
            <h1 className='py-20 text-center text-white'>Orders</h1>
        </div>
    );
};

export default Order;