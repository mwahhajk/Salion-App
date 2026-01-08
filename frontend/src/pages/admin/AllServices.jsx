import React from 'react'
import { useState } from 'react';
import {
  FaCut,
  FaRegSmileBeam,
  FaSpa,
  FaTint,
  FaUserTie,
} from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import {motion} from "motion/react"

function AllServices() {

  const [services, setServices] = useState([
    {
      id: 1,
      icon: <FaCut />,
      name: "Hair Style",
      desc: "Trendy and tailored haircuts designed to match your look and personality.",
      price: "125",
    },
    {
      id: 2,
      icon: <GiRazor />,
      name: "Shaving Style",
      desc: "Smooth and precise shaves with expert detailing for a clean, fresh finish.",
      price: "75",
    },
    {
      id: 3,
      icon: <FaRegSmileBeam />,
      name: "Beard Trimming",
      desc: "Shape and define your beard with accuracy for a sharp, confident appearance.",
      price: "95",
    },
    {
      id: 4,
      icon: <FaUserTie />,
      name: "Men Facial",
      desc: "Rejuvenating facial treatment that cleanses, hydrates, and refreshes your skin.",
      price: "150",
    },
    {
      id: 5,
      icon: <FaTint />,
      name: "Hair Coloring",
      desc: "Vibrant and long-lasting color treatments using high-quality salon products.",
      price: "225",
    },
    {
      id: 6,
      icon: <FaSpa />,
      name: "Spa & Relax",
      desc: "Relaxing head and neck massage to release stress and restore energy.",
      price: "110",
    },
  ]);

  const handleDelete=(id)=>{
    setServices(services.filter(item=>item.id!==id))
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-primary text-3xl'>All Services</h1>
          <button className='bg-primary text-white px-6 py-2 rounded'>Add Service</button>
        </div>

      <motion.div
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
       className="bg-white rounded-lg shadow overflow-hidden py-4">
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className="pb-6">
              <tr className='text-xl border-b border-gray-200 text-gray-700'>
              <th>Services</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {services.map((service)=>(
                <motion.tr key={service.id} className='border-b border-gray-500'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center justify-center gap-3'>
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>{service.price}</td>
                  <td className='px-6 py-4'>{service.desc}</td>
                  <td className='px-6 py-4'>
                    <button onClick={()=>handleDelete(service.id)}
                      className='bg-primary text-white px-4 rounded py-2'>Delete</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      </div>

    </div>
  )
}

export default AllServices
