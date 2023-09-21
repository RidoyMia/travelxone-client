import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Slider from "react-slick";
import CountryPlce from './CountryPlce';

const CountryTour = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768, // Breakpoint for mobile devices (adjust as needed)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1200, // Breakpoint for mobile devices (adjust as needed)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 2000, // Breakpoint for mobile devices (adjust as needed)
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
    const{country} = useParams();
    const[images,setImages] = useState([]);
    const[places,setPlaces] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/api/v1/tour/country/${country}`).then(res => res.json()).then(data => {
            setPlaces(data?.data);
           setImages(data.data[0].Pictures)
          
        })
    },[country])
   
    return (
        <div className='container'>
            <div className='py-5'>
            <Slider {...settings}>
                      {
                         images?.map(m =>
                          <div>
                                   <img src={m} className='h-[200px] md:h-[300px] lg:h-[300px] w-full px-10'></img>
                          </div>)
                       }
            </Slider>
            </div>
            <div>
                <h1 className='text-3xl font-semibold text-blue-700 text-center py-10 lg:py-20 md:py-16'>{country}</h1>
            </div>
           <div>
             <div className='grid py-20 grid-cols-1 te xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-5 md:gap-4 xl:gap-16'>
                {
                    places?.map(place => <CountryPlce country={country} place={place}></CountryPlce>)
                }
             </div>
           </div>
            
        </div>
    );
};

export default CountryTour;