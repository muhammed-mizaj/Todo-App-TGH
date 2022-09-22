

import React from 'react'
import { useState,useEffect } from 'react'
const Register = () => {
    const [FormData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
})
    const {username,email,password,password2}=FormData
    const onSubmit=(e)=>{
      e.preventDefault();
      
    }
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value

        }))
    }
  return (

    <div className='m-2 p-4'>
        <form onSubmit={onSubmit} className='flex flex-col justify-center bg-slate-300'>
          
          <div className='form-group m-2 p-2'>
          <input type="text" id="username" name="username" value={username} onChange={onChange} placeholder="Enter Your username"></input>
          </div>
          <div className='form-group m-2 p-2'>
          <input type="email" id="email" name="email" value={email} onChange={onChange} placeholder="Enter Your Email"></input>
          </div>
          <div className='form-group m-2 p-2'>
          <input type="text" id="password" name="password" value={password} onChange={onChange} placeholder="Enter Your Password"></input>
          </div>
            
          <div className='form-group m-2 p-2'>
          <input type="text" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm password"></input>
</div>
          
         
            
            
          <button className='bg-black text-white border-t-neutral-50'>Register</button>
            
        </form>
    </div>
  )
}

export default Register