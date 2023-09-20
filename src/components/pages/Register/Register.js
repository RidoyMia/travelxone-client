import React, { useContext, useState } from 'react';
import loginimg from "../../../images/login.png"
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContextElement } from '../../Context/AuthContext';

const Register = () => {
    const{setUser} = useContext(AuthContextElement)
    const [error,setError] = useState(null)
    const handlesubmit =  e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        const Cpassword = e.target.confirm.value
        const user = {
            email,password,role : 'user'
        }

        if(password === Cpassword){
          setError("Password does not match!")
          fetch("http://localhost:4000/api/v1/user/createUser",{
            method : 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            if(data?.data){
                setUser(data?.data.email)
           
            }
            else{
                console.log("nai")
            }
        })
        }
        else{
            
           console.log('ami')
        }
       
    }
    return (
        <div className='Register-container py-10 lg:py-20 md:py-15'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
               <div></div>
               <div>
                 <div className='bg-gray-300 text-center py-10  shadow-xl px-10 lg:px-0 rounded-md'>
                    <h2 className='text-xl font-semibold mb-8 text-[blue]'>Register!</h2>
                    <form onSubmit={handlesubmit}>
                        
                        <input type="text" required autoComplete='off' placeholder="Email" name='email' className="input  mb-5 shadow-5xl input-sm w-full max-w-xs" />
                        <input type="password" required autoComplete='off' placeholder="Password" name='password' className="input mb-5  shadow-5xl input-sm w-full max-w-xs" />
                        <input type="password" required autoComplete='off' placeholder="Confirm" name='confirm' className="input shadow-5xl mb-5  input-sm w-full max-w-xs" /><br></br>
                        <Link to="/login" className=' underline'> Please login</Link><br></br> <br></br>
                        <button type='submit' className='register-btn'>Register</button>
                    </form>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default Register;