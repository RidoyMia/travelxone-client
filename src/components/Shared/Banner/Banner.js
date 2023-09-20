import React from 'react';
import './Banner.css';
import banner1 from "../../../images/banner1.jpg"
import banner2 from "../../../images/banner2.jpg"

const Banner = () => {
    return (
        <div className='Banner-container'>
            <div className='container grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-20 lg:py-28'>
                <div className='pe-12 hidden lg:block md:block'>
                    <h1 className='text-2xl lg:text-5xl md:text-2xl font-bold text-white'>YOUR WORLD OF JOY</h1>
                    <p className='text-white text-sm lg:text-xl  py-12 leading-6 lg:leading-10'>Travel writers submit pieces for publication in magazines, blogs, travel brands' websites, newsletters, and other print or digital outlets. They may pen feature stories, first-person articles, blog posts, listicles, itineraries, or contribute to ongoing columns.</p>
                    <button className='Travel-btn'>Travel</button>
                </div>
                <div className='px-0 lg:px-20 md:px-5 py-0 lg:py-20 md:py-20'>
                        <div class=" relative ">
                            <img className='w-full h-full' src={banner1}></img>
                           <div class="absolute-container absolute -bottom-20 -right-4 lg:-bottom-32 lg:-right-10 lg:w-64 lg:h-64  w-32 h-32"><img src={banner2}></img></div>
                         </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;