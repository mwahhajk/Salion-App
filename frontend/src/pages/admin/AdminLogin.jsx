import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from "react-hot-toast"
import { Link } from 'react-router-dom';

function AdminLogin() {

  const{loading,setLoading,navigate,setAdmin}=useContext(AppContext);
  const[formData,setFormData]=useState({
    
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
  e.preventDefault();
    try{
      setLoading(true)
      console.log(formData);
      
      toast.success("User Login Successfully")
      setAdmin(true)
      navigate("/admin")
    }
    catch(err)
    {
      console.log(err);
      
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center
    items-center px-4'>
      <div className='max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12'>
        <h1 className='text-4xl md:text-4xl bg-primary text-transparent bg-clip-text text-center mb-2'>Admin Login</h1>
        <p className='text-center text-gray-500 mb-3'>Create your account to get started</p>
        <form onSubmit={handleSubmit}>
          
          <div className='mb-4'>
            <label htmlFor="" className='block text-sm font-semibold text-gray-600 mb-2'>
              Email
            </label>
            <input type="email" name='email' onChange={handleChange} placeholder='Enter your email' value={formData.email}
            className='w-full border-gray-300 border-2 px-4 py-3 rounded-lg focus:border-blue-500
            outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="" className='block text-sm font-semibold text-gray-600 mb-2'>
              Password
            </label>
            <input type="password" name='password' onChange={handleChange} placeholder='Enter your Password' value={formData.password}
            className='w-full border-gray-300 border-2 px-4 py-3 rounded-lg focus:border-blue-500
            outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300'/>
          </div>  
          <button type='submit' className='w-full bg-primary text-white px-4 py-2 rounded-lg transform 
          hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer'>
            {loading?"loading, please wait ....":"Login"}
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default AdminLogin;