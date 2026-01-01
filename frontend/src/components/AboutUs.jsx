import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {motion} from "motion/react";
import {MoveRight} from "lucide-react";
import { assets } from "../assets/assets";


function AboutUs() {


  const {navigate}=useContext(AppContext)
  return (
    <div className='max-w-7xl w-full mx-auto py-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center md:text-start uppercase text-3xl md:text-4xl font-bold'>About Us</h1>
          <div className="hidden md:block mt-2 w-16 h-1 bg-primary"></div>

          <div className='flex gap-6 flex-col mt-8'>
            <p className="px-2">
              {" "}
              There are many beauty salons around, but only a few stay true to
              quality, care, and style.
            </p>
             <p className="px-2">
              Some salons use fancy words or exaggerated claims, but we believe
              real beauty speaks for itself. There’s nothing artificial about
              the confidence you feel after visiting us.
            </p>
          </div>
          <motion.button onClick={()=>navigate("/contact")}
            className='border border-primary cursor-pointer bg-white text-black flex gap-4 px-10 py-3 mt-8
            justify-center items-center hover:bg-primary hover:text-white hover:border-none'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}>
            Contact Us <MoveRight/>
          </motion.button>
        </div>
        <div className='border border-gray-500'>
          <img src={assets.about1} alt="about1" srcset="" 
          className='w-full h-1/3 rounded-md px-2'/>
        </div>
        <div className='border border-gray-500'>
          <img src={assets.about2} alt="about2" srcset=""
          className='w-full h-1/3 rounded-md px-2' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs