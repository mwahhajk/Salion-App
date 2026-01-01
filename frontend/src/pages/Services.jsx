import React from 'react'
import { assets } from '../assets/assets.js';
import {
  FaCut,
  FaRegSmileBeam,
  FaSpa,
  FaTint,
  FaUserTie,
} from "react-icons/fa";
import { GiRazor } from "react-icons/gi";
import { motion } from 'motion/react';
import ServiceCard from '../components/ServiceCard.jsx';

function Services() {
  const servicesData = [
    {
      icon: <FaCut />,
      name: "Hair Style",
      desc: "Trendy and tailored haircuts designed to match your look and personality.",
      price: "125",
    },
    {
      icon: <GiRazor />,
      name: "Shaving Style",
      desc: "Smooth and precise shaves with expert detailing for a clean, fresh finish.",
      price: "75",
    },
    {
      icon: <FaRegSmileBeam />,
      name: "Beard Trimming",
      desc: "Shape and define your beard with accuracy for a sharp, confident appearance.",
      price: "95",
    },
    {
      icon: <FaUserTie />,
      name: "Men Facial",
      desc: "Rejuvenating facial treatment that cleanses, hydrates, and refreshes your skin.",
      price: "150",
    },
    {
      icon: <FaTint />,
      name: "Hair Coloring",
      desc: "Vibrant and long-lasting color treatments using high-quality salon products.",
      price: "225",
    },
    {
      icon: <FaSpa />,
      name: "Spa & Relax",
      desc: "Relaxing head and neck massage to release stress and restore energy.",
      price: "110",
    },
  ];
  return (
    <>
    <div className='max-w-7xl mx-auto my-20 '>

      <h1 className='text-center py-10 text-6xl text-primary font-bold'>Our Services</h1>
      <div className='flex mt-8 mx-auto max-w-4xl gap-12 w-full  '>
        
        <div className='w-[30%]'>
          <img
            src={assets.service_img}
            className='w-full rounded-full'
            alt=""
          />
        </div>
        <div className='w-[40%] flex flex-col gap-2 justify-center mx-8'>
          <h2 className='text-gray-800 text-3xl text-center'>Welcome to our Salion</h2>
          <p className=' text-center'>There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in that some form by injected
            humour or randomised is words which don't look even slightly
            believable. If you are Lorem Ipsum you need to be sure there isn't
            anything embarrassing.</p>
             <motion.button
            onClick={() => navigate("/book-appointment")}
            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.2 } }}
            className="mt-5 bg-primary text-white px-10 py-3 cursor-pointer hover:bg-black transition"
          >
            Book Service
          </motion.button>
        </div>
      </div>
    </div>

    {/* service cards */}

    <div className='py-12'>
      <h1 className="text-center text-2xl md:text-4xl font-semibold">
          some services
        </h1>
        <p className="text-lg text-center my-3">
          {" "}
          There are many variations of passages of Lorem Ipsum available but the
          majority injected humour randomised words
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ml-14 mt-8 gap-5 ">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
    </div>
    </>
  )
}

export default Services