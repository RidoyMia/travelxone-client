import React from 'react';
import logo from "../../../images/travel-xone.png"

const Footer = () => {
    return (
        <div className=' bg-gray-600 pb-10'>
            <footer className="footer p-10    bg-gray-600 text-base-content">
  <aside className='text-center justify-center'>
     <div className='flex justify-center items-center  justify-items-center'>
     <img src={logo}></img>
     </div>
  
    <p className='text-center text-white text-lg'>TRAVEL.XONE.COM <br></br>
We provide reliable tourist services in Bangladesh</p>
  </aside> 
  <nav className='text-left'>
    <header className="footer-title  text-gray-100">Contacts</header> 
    <a className="link link-hover text-white">250 Main Street, Mirpur, Dhaka</a> 
    <a className="link link-hover text-white">Phone: +880123456789</a> 
    <a className="link link-hover text-white">travelxone3@gmail.com</a> 
    <a className="link link-hover text-white">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title  text-center text-gray-100">PLAN YOUR TRIP</header> 
    <a className="link link-hover text-white">Login</a> 
    <a className="link link-hover text-white">Transport Booking</a> 
    <a className="link link-hover text-white">Create new Account</a> 
    
  </nav> 
  <nav>
    <header className="footer-title  text-gray-100">QUICK LINKS</header> 
    <a className="link link-hover text-white">Support Policy Page</a> 
    <a className="link link-hover text-white">Return Policy Page</a> 
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Privacy Policy Page</a>
    <a className="link link-hover text-white">Term Conditions Page</a>
  </nav>
  
</footer>
<div className="divider h-[1px] w-full text-center  bg-gray-100 align-middle"></div>
<div className='text-center text-gray-400'>
    <p>© 2023 Copyrights by travel.xone. All Rights Reserved</p>
</div>
        </div>
    );
};

export default Footer;