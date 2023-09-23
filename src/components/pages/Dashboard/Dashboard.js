import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FcManager } from 'react-icons/fc';
import { AuthContextElement } from '../../Context/AuthContext';
const Dashboard = () => {
  const{logOut,user} = useContext(AuthContextElement);
  const[admin,setAdmin] = useState(false);
  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/user/admin?email=${user?.email}`).then(res => res.json()).then(data =>{
     if(data?.data[0]?.role == "admin"){
      console.log(data?.data[0]?.role)
      setAdmin(true)
     }
     else{
      console.log('user')
      setAdmin(false)
     }
    })
  },[user])
 
const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('travelaccesstoken')
    logOut()
    navigate('/')
    
  }
    return (
        <div className=''>
           
            <div className='grid grid-cols-5 lg:grid-cols-9 md:grid-cols-6'>
               
            <div className="drawer block lg:hidden md:hidden py-20 px-3 ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button"><FcManager></FcManager></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-gray-500 text-base-content">
      {/* Sidebar content here */}
      <Link className='link text-white' to="/dashboard/my-order">Orders</Link><br></br><br></br>
                     <Link className='link text-white' to="/dashboard/my-reviews">Reviews</Link><br></br><br></br>
                    
                    {admin? <Link className='link text-white' to="/dashboard/users">Users</Link> : ''}
                    {admin? <div><br></br></div> : ''}
                     <Link className='link text-white' to="/dashboard/reviews">Reviews</Link><br></br><br></br>
                     {
                          user? <button onClick={logout}>LogOut</button>: ""
                    }
      
    </ul>
  </div>
</div>

                <div className='col-span-0 lg:col-span-2 hidden lg:block md:block py-20 px-1 lg:px-10 bg-gray-500'>
                     <Link className='link text-white' to="/dashboard/my-order">Orders</Link><br></br><br></br>
                     <Link className='link text-white' to="/dashboard/my-reviews">Reviews</Link><br></br><br></br>
                     
                     {admin? <Link className='link text-white' to="/dashboard/users">Users</Link> : ''}
                    {admin? <div><br></br></div> : ''}
                     <Link className='link text-white' to="/dashboard/reviews">Reviews</Link><br></br><br></br>
                     {
      user? <button className='link text-white' onClick={logout}>LogOut</button>: ''
    }
                     
                </div>
                <div className='col-span-4 lg:col-span-7 md:col-span-5  bg-slate-950'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;