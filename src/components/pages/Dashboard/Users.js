import React, { useEffect, useState } from 'react';
import Loadin from '../../Context/Loading/Loadin';

const Users = () => {
    const[users,setUsers] = useState([]);
    const[beforeusers,setBeforeusers] = useState()
    const[loading,setLoading] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/api/v1/user/alluser`).then(res =>res.json()).then(data => {
            console.log(data?.data,'user')
            setUsers(data?.data);
            setBeforeusers(data?.data)
        })
    },[])
    const searchingHandler = e =>{
        
        e.preventDefault();
        const word =e.target.search.value;
        if(word ){
            const searchText = e.target.search.value;
            const baki =  users?.filter(person => person?.email?.toLowerCase().includes(word?.toLowerCase()));
            setUsers(baki)
            console.log(word,'word')
        }
        else{
            
            const ager = [...beforeusers]
           setUsers(ager)
            console.log(word,'wordnothing')
        }
        
        
        e.target.reset()
    }
    const deleteuser = email =>{
       
        fetch(`http://localhost:5000/api/v1/user/${email}`,{
            method : 'DELETE'
        }).then(res => res.json()).then(data => {
            console.log(data?.data?.deletedCount,'deleted')
            if(data?.data?.deletedCount > 0){
                const remaining = users?.filter(u => u?.email != email);
                setUsers(remaining)
               
            }
        })
    }
    if(loading){
        return <Loadin></Loadin>
    }
    console.log(beforeusers,'before')
    return (
        <div>
            <div className='flex justify-items-center justify-center pb-5 py-5'>
    <form onSubmit={searchingHandler}>
      <input type='text' name="search" className=' w-48 md:w-64 lg:w-96 py-1 md:py-2 lg:py-2 px-4' placeholder='searchUser'></input><button className='py-1 lg:py-2 md:py-2 px-3 text-white bg-blue-700' type='submit'>Search</button>
    </form>
  </div>
<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
     
     <div>
     {
        users?.map(u =><div className='flex  items-center  justify-between my-2 py-1 mx-20 bg-gray-400 px-5'>
        <p className='text-white'>{u?.email}</p>
        <button className=' bg-blue-600 text-white py-1 px-2' onClick={()=> deleteuser(u?.email)}>Delete</button>
     </div>)
     }
     </div>
     </div>
  
        </div>
    );
};

export default Users;