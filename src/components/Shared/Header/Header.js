import React, { useContext, useState } from 'react';
import './Header.css'
import logo from "../../../images/travel-xone.png"
import toggler from "../../../images/hamburger-menu-icon-png-9-removebg-preview (1).png"
import { Link, useNavigate } from 'react-router-dom';
import AuthContext, { AuthContextElement } from '../../Context/AuthContext';

const Header = () => {
  const{logOut,user} = useContext(AuthContextElement)
 console.log(user)
const navigate = useNavigate()

  

  const logout = ()=>{
    localStorage.removeItem('travelaccesstoken')
    logOut()
    
  }
  const searchingHandler = e =>{
    e.preventDefault()
    const search = e.target.search.value;
    navigate(`/search/${search}`)
    e.target.reset()

  }
    return (
        <div className='sh shadow-lg px-1 lg:px-10 md:px-8'>
       <div className='flex justify-between items-center md:justify-between'>
           <div>
           <div className="dropdown block lg:hidden">
      <label tabIndex={0} className="btn btn-ghost lg:hidden flex justify-start">
        <img className='toggler-btn ' src={toggler}></img>
        <a className=" normal-case text-xl block lg:hidden "><img className='w-[60px] md:w-[120px] ' src={logo}></img></a>
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     
          <Link className='link' to="/">Home</Link>
    
   
   
    <Link className='link' to="/contact">Contact Us</Link>
    <Link className='link' to="/blog">Blog</Link>
    {
      user? <Link className='link' to="/dashboard">Dashboard</Link> : <Link className='link' to="/register"> Register</Link>
    }
    

              
      </ul>
    </div>
               <a className=" normal-case text-xl hidden lg:block "><img src={logo}></img></a>
               
         </div>
        <div className='text-left'>
          <ul className='hidden lg:block'>
          <Link className='link' to="/">Home</Link>
    
    
    <Link className='link' to="/contact">Contact Us</Link>
    <Link className='link' to="/blog">Blog</Link>
    {
      user? <Link className='link' to="/dashboard">Dashboard</Link> : <Link className='link' to="/register"> Register</Link>
    }
    
          </ul>
          <ul className='block lg:hidden'>
          <Link className='link' to="/register"> Register</Link>
          </ul>
        </div>
       </div>


  <div className='flex justify-items-center justify-center pb-5'>
    <form onSubmit={searchingHandler}>
      <input type='text' name="search" className=' w-48 md:w-64 lg:w-96 py-1 md:py-2 lg:py-2 px-4' placeholder='search'></input><button className='py-2 px-3 text-white bg-blue-700' type='submit'>Search</button>
    </form>
  </div>

           
        </div>
    );
};

export default Header;