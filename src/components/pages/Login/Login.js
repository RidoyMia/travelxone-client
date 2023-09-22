import React, { useContext } from 'react';
import loginimg from "../../../images/login.png"
import { Link } from 'react-router-dom';
import { AuthContextElement } from '../../Context/AuthContext';

const Login = () => {
    const {user,createUser,signIn} = useContext(AuthContextElement);
    const handlesubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email,password).then(result => {
            if(result){
                const userbody = {
                    email,password
                }
                fetch(`http://localhost:5000/api/v1/user/login`,{
                    method : 'POST',
                    body: JSON.stringify(userbody),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                   if(data){
                    console.log(data.data.accesstoken)
                    
                    localStorage.setItem('travelaccesstoken',data?.data.accesstoken)
                   }
                }).catch(e=>{
                    console.log(e)
                })
            }
        })
       
    }
    return (
        <div>
            <div className='Register-container py-10 lg:py-20 md:py-15'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
               <div></div>
               <div>
                 <div className='bg-gray-300 text-center py-10  shadow-xl px-10 lg:px-0 rounded-md'>
                    <h2 className='text-xl font-semibold mb-8 text-[blue]'>Login!</h2>
                    <form onSubmit={handlesubmit}>
                        
                        <input type="text" required autoComplete='off' placeholder="Email" name='email' className="input  mb-5 shadow-5xl input-sm w-full max-w-xs" />
                        <input type="password" required autoComplete='off' placeholder="Password" name='password' className="input mb-5  shadow-5xl input-sm w-full max-w-xs" />
                       <br></br>
                        <Link to="/register" className=' underline'> Please Register</Link><br></br> <br></br>
                        <button type='submit' className='register-btn'>Login</button>
                    </form>
                 </div>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Login;