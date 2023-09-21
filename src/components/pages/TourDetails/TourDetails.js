import React, { useContext, useEffect, useState } from 'react';
import './TourDetails.css'
import { json, useNavigate, useParams } from 'react-router-dom';
import img from "../../../images/detailsBanner.png";
import Slider from "react-slick";
import { BsStopwatch } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { TbWorld } from 'react-icons/tb';
import { MdOutlineMergeType, MdReviews } from 'react-icons/md';
import { AuthContextElement } from '../../Context/AuthContext';

const TourDetails = () => {
    const[review,setReview] = useState([])
    const navigate = useNavigate()
    const{user} = useContext(AuthContextElement);
    const[rating,setRating] = useState([])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const getReviewHandler = (id) =>{
        fetch(`http://localhost:4000/api/v1/review/${id}`).then(res => res.json()).then(data =>{
            setRating(data?.data)
        })
      }
    const {place,CountryName} = useParams();
    const[tour,setTour] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:4000/api/v1/tour/${place}`).then(res => res.json()).then(data => {
            setTour(data?.data)
        })
    },[place])
    
    const Reviews = e =>{
        e.preventDefault();
        const form = e.target
        const reviewData = {
           name : form.name.value,
           email : user,
           message:form.message.value,
           TourId : tour?._id
        }
        console.log(reviewData)
        fetch("http://localhost:4000/api/v1/review/create",{
            method : 'POST',
            body : JSON.stringify(reviewData),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            setRating(data?.data)
            if(data?.data){
                getReviewHandler(tour?._id)
            }
        })
        
        e.target.reset()
    };
    

    const booksubmit = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.Name.value;
        const email = user;
        const phone= form.phone.value;
        const date = form.date.value;
        const size = form.size.value;
        const note = form.note.value;
        const orderData = {
            name,email,phone,date,size,note,TourId : tour?._id,total : tour?.Price * size
        }
        fetch("http://localhost:4000/api/v1/order/create",{
            method : 'POST',
            body : JSON.stringify(orderData),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => {
           if(data?.getting){
           navigate('/dashboard')
           }
        })

    form.reset()
    }
    getReviewHandler(tour?._id)
    return (
        <div className=''>
            <div className='small-banner'>
               <div className='container px-10 lg:px-20 md:px-20 py-5 lg:py-20 md:py-16'>
                 <h1 className='text-lg lg:text-3xl py-3 md:text-xl text-white font-semibold'>Country : {tour?.Country}</h1>
                 <h1 className='text-md lg:text-lg md:text-md text-white '>PlaceName : {tour?.DivissionId}</h1>
               </div>
            </div>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-x-2'>
                    <div className='col-span-0 lg:col-span-3 md:col-span-3 py-3'>
                        <Slider {...settings}>
                           {
                            tour?.Pictures?.map(m => <div>
                                <img src={m} className='w-full h-[200px] lg:h-[400px] md:h-[400px]'></img>
                            </div>)
                           }
                        </Slider>
                        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 pt-8 pb-5'>
                            <div className='flex flex-wrap justify-start items-center align-middle py-3'>
                                <BsStopwatch></BsStopwatch>
                                <div className='px-3'>
                                    <h1 className='font-semibold'>Duration</h1>
                                    <p>{tour?.Duration}</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-start items-center align-middle py-3'>
                                <HiUserGroup></HiUserGroup>
                                <div className='px-3'>
                                    <h1 className='font-semibold'>GroupSize</h1>
                                    <p>{12} peoples</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-start items-center align-middle py-3'>
                                <MdOutlineMergeType></MdOutlineMergeType>
                                <div className='px-3'>
                                    <h1 className='font-semibold'>TourType</h1>
                                    <p>{tour?.TourType}</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-start items-center align-middle py-3'>
                                <TbWorld></TbWorld>
                                <div className='px-3'>
                                    <h1 className='font-semibold'>Language</h1>
                                    <p>English </p>
                                </div>
                            </div>
                           
                            
                        </div>
                        <hr></hr>
                        <div className='py-10 '>
                            <h2 className='text-2xl font-semibold text-gray-500 pb-3'>About This Tour</h2>
                            <p className=' leading-7'>{tour?.About}</p>
                        </div>
                        <div>

                            <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-3'>
                                <div>
                                <h2 className='text-2xl font-semibold text-gray-500 py-3'>Highlights</h2>
                                    <ul>
                                        <li className=' text-gray-500 pt-2'>* Accepts Credit Cards</li>
                                        <li className=' text-gray-500 pt-2'>* Outdoor Seating</li>
                                        <li className=' text-gray-500 pt-2'>* Car Parking</li>
                                        <li className=' text-gray-500 pt-2'>* Reservations</li>
                                        <li className=' text-gray-500 pt-2'>* Free Coupons</li>
                                        <li className=' text-gray-500 pt-2'>*Restaurant</li>
                                    </ul>
                                </div>
                                <div>
                                <h2 className='text-2xl font-semibold text-gray-500 py-3'>Places Names</h2>
                                    <ul>
                                        {
                                            tour?.Spots?.map(p => <li className=' text-gray-500 pt-2'>* {p}</li>)
                                        }
                                        
                                    </ul>
                                </div>
                                <div>
                                <h2 className='text-2xl font-semibold text-gray-500 py-3'>Includes</h2>
                                    <ul>
                                        {tour?.included?.map(i =><li className=' text-gray-500 pt-2'>* {i}</li>)}
                                        
                                        
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='py-12'>
                          
                            {
                                rating?.map(r =>  <div className=' border rounded-md  border-gray-600 py-4 px-10'>
                                <h2 className='text-gray-700 text-lg font-semibold'>Name :{r?.name}  </h2>
                                <p className='pt-1 text-md'>This is good for us</p>
                            </div>
                                )
                            }
                        </div>
                     {user?    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className='py-3 px-14 bg-blue-700 text-white shadow-xl font-semibold'>Your Experience</button> : ""}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                  

<dialog id="my_modal_1" className="modal container">
  <div className="modal-box">
     <div className='grid grid-cols-8'>
        <div></div>
        <div className='col-span-6'>
         <form onSubmit={Reviews}>
             <input className='w-full  rounded-sm px-5 py-2 my-2' type='text' required name="name" placeholder='Your Name'></input>

             <input className='w-full  rounded-sm px-5 py-2 my-2' type='text' value={user} name="email" placeholder='Your Name'></input>
             <div className="rating rating-sm px-3 py-5">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
</div>
             <textarea className="textarea w-full  rounded-sm px-5 py-2 my-2 textarea-bordered" name="message" placeholder="Message"></textarea>
             <button className="py-1 bg-blue-700 text-white font-semibold px-6 rounded-sm" type='submit'>Submit</button>
         </form>
        </div>
     </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="py-1 bg-blue-700 text-white font-semibold px-6 rounded-sm">Close</button>
      </form>
    </div>
  </div>
</dialog>
                    </div>
                    <div className='my-3'>
                        <div className=' bg-gray-100 shadow-md'>
                            <div className='flex flex-wrap justify-between px-3 items-center align-middle py-3 bg-blue-700'>
                                <div>
                                <h2 className='text-white text-xl'>${tour?.Price}</h2>
                                <p className='text-gray-100'>Per Person</p>
                                </div>
                            
                                <h1 className='text-white text-md'>{tour?.DivissionId}</h1>
                            </div>
                            <div className='px-5 py-4'>
                                <h1 className='text-black text-2xl font-semibold'>BOOK TOUR</h1>
                                <p className='text-gray-700'>Find your dream tour today</p>

                                <form className='py-5' onSubmit={booksubmit}>
                                <input className='w-full bg-black text-white  rounded-md px-5 py-2 my-2' type='text' required name="Name" placeholder='Your Name'></input>
                                <input className='w-full bg-black text-white  rounded-md px-5 py-2 my-2' type='text' required name="email" value={user? user : 'Your email'} placeholder='Your Name'></input>
                                <input className='w-full bg-black text-white  rounded-md px-5 py-2 my-2' type='number' required name="phone" placeholder='Phone'></input>
                                <input className='w-full bg-gray-400 text-gray-300  rounded-md px-5 py-2 my-2' type='date' required name="date" ></input>
                                <input className='w-full bg-black text-white  rounded-md px-5 py-2 my-2' type='number'  required name="size" placeholder='total peoples'></input>
                                
                                <textarea className="textarea w-full bg-black text-white  rounded-sm px-5 py-2 my-2 textarea-bordered" name="note" placeholder="Notes"></textarea>
                                <button type="submi" className='py-2 w-full bg-blue-700 text-gray-200 rounded-md font-semibold'>Book Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
              
            </div>
        </div>
    );
};

export default TourDetails;