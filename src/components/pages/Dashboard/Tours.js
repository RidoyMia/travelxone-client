import React, { useEffect, useState } from 'react';
import CountryPlce from '../CountryTour/CountryPlce';
import { useNavigate } from 'react-router-dom';
import Loadin from '../../Context/Loading/Loadin';

const Tours = () => {
    const [tour,setTour] = useState([]);
    const[loading,setLoading] = useState(false)
    const navigate = useNavigate();
    const[pageNumber,setPagenumber] = useState(1);
    const[totalTours,setTotalTours] = useState()
    
    
    
       useEffect(()=>{
        setLoading(true)
        fetch(`https://travel-xone-server-ridoymia.vercel.app/api/v1/tour/alltour?page=${pageNumber}`).then(res => res.json()).then(data => {
          
        setTotalTours( Math.ceil(data?.data?.totalDocuments / 10))
        

         
        setTour(data?.data?.result)
         setLoading(false)
    
    })
       },[pageNumber])
        const update = id =>{
            console.log(id)
            navigate(`/dashboard/admin/update/${id}`)
        }
        console.log(totalTours,'totaltours')
        let pages = []
        if(totalTours > 0){
            for (let i = 0; i < totalTours; i++) {
                 pages.push(i);
               
                
            }
        }
       const deleted = product =>{
        setLoading(true)
        const id = {_id : product?._id}
        console.log(id,'id')
            fetch('https://travel-xone-server-five.vercel.app/api/v1/tour/deleted',{
                method : 'DELETE',
                body : JSON.stringify(id),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }).then(res => res.json()).then(data => {
                console.log(data)
                if(data?.data?.deletedCount > 0){
                    const remaining = tour?.filter(p => p?._id != product?._id);
                    setTour(remaining)
                    setLoading(false)
                }
            })
       }
       if(loading){
        return <Loadin></Loadin>
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
                <button className='py-1 px-3 bg-blue-500  hover:bg-white  hover:text-yellow-600  rounded-md mx-2 text-white' onClick={()=>deleted(o)}>Delete</button>
                </div>
            </div>
            </div>) }

           <div className='text-center justify-center my-10'>
           {
                pages?.map(p => <button key={p}
                    className={`py-1 px-2 mx-1 rounded-md ${
                      p + 1 === pageNumber
                        ? 'bg-blue-600 text-white' // Active button styles
                        : 'bg-blue-300 text-black' // Inactive button styles
                    }`} onClick={()=> setPagenumber(p + 1)}>{p + 1}</button>)
            }
           </div>
        </div>
    );
};

export default Tours;