import React from 'react';
import bannerone from "../../../images/opportunity.png"
import bannertwo from "../../../images/opportunity3.png"
import pngone from "../../../images/safety-removebg-preview.png"
import pngtwo from "../../../images/price-removebg-preview.png"
import pngthree from "../../../images/travel-removebg-preview.png"

const Company = () => {
    return (
        <div className='container'>
            <div className='text-center'>
                <div></div>
                <div className="flex flex-col w-full border-opacity-50">
                <div className="grid  card  rounded-box place-items-center"><h1 className='text-lg font-semibold text-[blue]'>ABOUT COMPANY</h1></div>
                <div className='flex justify-items-center justify-center'>
                <div className="divider h-1 w-10 text-center bg-[blue] align-middle"></div>
                </div>
                <div className="grid card  rounded-box place-items-center"><h1 className='text-4xl font-semibold '>Opportunity for travels</h1></div>
            </div>
            </div>

            <div className='container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-20 lg:py-28'>
            <div className='px-0 lg:px-20 md:px-5 '>
                        <div class=" relative ">
                            <img className='w-full h-full' src={bannerone}></img>
                           <div class="absolute-container absolute -bottom-20 -right-4 lg:-bottom-32 lg:-right-10 lg:w-64 lg:h-64  w-32 h-32"><img src={bannertwo}></img></div>
                         </div>
                </div>
                <div className=' mt-12 lg:mt-0 md:mt-0'>
                    <h2 className='text-xl lg:text-3xl md:text-2xl font-semibold  text-gray-600'>Great opportunity for adventure & travels -</h2>
                    <div className='flex mb-7 mt-6 justify-between'>
                      <img className='w-[70px] h-[70px] hover:animate-spin'  src={pngone}></img>
                      <p className='px-3 text-gray-500 font-semibold  leading-7 text-lg'>Keep your travel plans, including accommodation details, to yourself. Don't hitch hike. Avoid 'seedier' areas of the cities you visit, especially at night.</p>
                    </div>
                    <div className='flex mb-7  justify-between'>
                      <img className='w-[70px] hover:animate-spin h-[70px]' src={pngtwo}></img>
                      <p className='px-3 text-gray-500 font-semibold leading-7 text-lg'>We provide international and domestic tour packages from bangladesh at low prices including best vacation packages in hotels near bangladesh.</p>
                    </div>
                    <div className='flex mb-7  justify-between'>
                      <img className='w-[70px] hover:animate-spin h-[70px]' src={pngthree}></img>
                      <p className='px-3 text-gray-500 font-semibold leading-7 text-lg'>If you have an account with Travel Xone, Proceed to Sign in with the Download a brief user guide here or contact travel@xone.org</p>
                    </div>
                    
                    <div></div>
                </div>
                
            </div>
        </div>
    );
};

export default Company;