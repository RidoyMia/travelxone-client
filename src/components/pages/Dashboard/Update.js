import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Update = () => {
    const{updateId} = useParams();
    const[Spots,setSpots] = useState()
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    let Pictures = []
          const keyis =`bd0f22832703db189e737da27b90a211`
   const handleAddDoctor =( data) =>{
    try{
      
   let {Spots,included,image,Duration,...others} = data;
   
    const formData = new FormData();
    Duration = Duration + " days"
    Spots = Spots.split(",");
    included = included.split(",");
   
    
    const orderData = {...others,Spots,Duration,included,Pictures};
  
   
    
      const imageFile = data.image;
    
      
        for (let i = 0; i < imageFile.length; i++) {
            const element = imageFile[i];
            
            formData.append('image', element);
                 const url = `https://api.imgbb.com/1/upload?key=${keyis}`
      
     
       try{
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            const imageLink =  imgData.data?.url;
            
            
            Pictures.push(imageLink)
           
            if(Pictures.length > 2){
                fetch(`https://travel-xone-server-five.vercel.app/api/v1/tour/update/${updateId}`,{
            method : 'POST',
            body : JSON.stringify(orderData),
            headers: {
                'Content-Type': 'application/json'
              }
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
            }
            else{
                console.log("nai")
            }
           
           
        })
        console.log(Pictures,'seshe')
        if(Pictures.length > 2){
            console.log('eibar hoice')
        }
        else{
            console.log("nai")
        }
       }catch(e){
        console.log(e)
       }
            
        
        }

        
       
       
    
     
        
       }catch(e){
        console.log(e.message)
       }
       data.target.reset()
           
   }
   console.log(Pictures,'koi')
  
   
    return (
        <div>
            <h1 className=' text-red-600 text-center py-20 '>{updateId}</h1>
            
            <div>
                 <div className='grid grid-cols-1 lg:grid-cols-5 justify-center bg-gray-700'>
                    <div></div>
                    <div className='col-span-o lg:col-span-4'>
                    <form onSubmit={handleSubmit(handleAddDoctor)} className='text-white container'>
               <div className='flex justify-between  items-center'>

               <div className="form-control w-full max-w-xs ">
                    <label className="label"> <span className="label-text text-white">Country</span></label>
                    <input  type="text" {...register("Country", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
               <div className="form-control w-full max-w-xs ml-0 lg:ml-6 md:ml-3">
                    <label className="label"> <span className="label-text text-white">DivissionId</span></label>
                    <input type="text" {...register("DivissionId", {
                        required: "DivissionId is Required"
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                
               </div>
               <div className='flex justify-between  items-center'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Spots</span></label>
                    <input  type="text" {...register("Spots", {
                        required: "Name is Required",
                        
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ml-0 lg:ml-6 md:ml-3">
                    <label className="label"> <span className="label-text text-white">Duration</span></label>
                    <input type="number" {...register("Duration", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
               </div>
              
               <div className='flex justify-between  items-center'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Price</span></label>
                    <input type="number" {...register("Price", {
                        required: "Price is Required"
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ml-0 lg:ml-6 md:ml-3">
                    <label className="label"> <span className="label-text text-white">TourType</span></label>
                    <input value="Group" type="text" {...register("TourType", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
               </div>
               <div className='flex justify-between  items-center'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">About</span></label>
                    <textarea type="text" {...register("About", {
                        required: "About is Required"
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ml-0 lg:ml-6 md:ml-3">
                    <label className="label"> <span className="label-text text-white">included</span></label>
                    <input type="text" {...register("included", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
               </div>

               <div className='flex justify-between  items-center'>
               <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Pickup</span></label>
                    <input  type="text" {...register("Pickup", {
                        required: "Pickup is Required"
                       
                    })} className="input input-bordered w-full max-w-xs rounded-md text-black" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ml-0 lg:ml-6 md:ml-3">
                    <label className="label"> <span className="label-text text-white">Photo</span></label>
                    <input multiple type="file" {...register("image", {
                        required: "Photo is Required"
                       
                    })} className="input input-bordered w-full max-w-xs rounded-md" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
               </div>
               
                
                <div className='text-center  my-10'>
                    <div></div>
                <input className=' bg-blue-500 py-2 px-10 lg:-ml-[60px] text-white text-center w-full  lg:w-48  mt-4 col-span-0 lg:col-span-1' value="Add Doctor" type="submit" />
                </div>
            </form>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Update;