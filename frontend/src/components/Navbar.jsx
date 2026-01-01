import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Link, useLocation } from 'react-router-dom'
import { assets } from "../assets/assets.js";
import {BsCart2} from "react-icons/bs"
import {easeOut, motion} from "motion/react"
import { Menu, MoveRight, X} from "lucide-react"
import {FaUserCircle} from "react-icons/fa"



function Navbar() {
const{user,setUser}=useContext(AppContext)
const location=useLocation();
const[showMenu,setShowMenu]=useState(false);
const[mobileOpen,setMobileOpen]=useState(false);

const isActive=(path)=>location.pathname===path;
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/50 background-blur-sm px-4 
    sm:px-8 md:px-16 lg:px-32 flex items-center justify-between py-4 transition-all'>
        <div className='logo'>
            <Link to={"/"}>
                <img src={assets.logo} className="w-32" alt="" srcset="" />
            </Link>
        </div>

        {/* desktop menu */}
        <ul className='hidden md:flex items-center space-x-12 uppercase'>
            <Link to="" className={`${isActive("/")?"text-primary":"text-white"} hover:"text-primay
            duration-300 transition-colors`}
            >Home
            </Link>
            <Link to="/services" className={`${isActive("/services")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`}>
            Services
            </Link>
            <Link to="/shop" className={`${isActive("/shop")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`}>
            Shop
            </Link>
            
            <Link to="/contact" className={`${isActive("/contact")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`}>
            Contact
            </Link>
        </ul>

        {/* right section */}
        <div className='flex items-center gap-4 relative'>
        <Link to="/cart" className='relative' >
        <BsCart2 className='text-white w-6 h-6 sm:w-7 sm:h-7'/>
        <span className='absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold
                 w-5 h-5 flex items-center justify-center rounded-full'>3</span>
        </Link>

        {!user?(
          <motion.button 
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          whileHover={{scale:1.05}}
          transition={{duration:0.3, ease:easeOut}}
          className="hidden sm:flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 
             hover:bg-black hover:border hover:border-primary hover:text-white 
             duration-300 cursor-pointer rounded-md text-sm sm:text-base">
          Login <MoveRight/>
          </motion.button>
          ):
          (
            // profile dropdown
          <div className='relative'
          onMouseEnter={()=>setShowMenu(true)}
          onMouseLeave={()=>setShowMenu(false)}>
            <FaUserCircle className='text-white w-9 h-9 cursor-pointer'/>

              {showMenu && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-48 py-2 z-50">
                <Link
                  to="/my-bookings"
                  className="block px-4 py-2 hover:bg-primary"
                >
                  My Bookings
                </Link>
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 hover:bg-primary"
                >
                  My Orders
                </Link>
                <button
                  onClick={() => setUser(null)}
                  className="block w-full text-left px-4 py-2 hover:bg-primary"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Mobile Button */}
        <button onClick={()=>setMobileOpen(!mobileOpen)}
          className='md:hidden text-white focus:outline-none'>
          {mobileOpen?<X size={28}/>:<Menu size={28}/>}
        </button>
          </div>

          {/* Mobile Dropdown Menu */}
        {mobileOpen&&(
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-start
           px-6 py-4 space-y-4 md:hidden z-40">
          
          <Link to="" className={`${isActive("/")?"text-primary":"text-white"} hover:"text-primay
            duration-300 transition-colors`} onClick={()=>setMobileOpen(false)}
            >Home
            </Link>
            <Link to="/services" className={`${isActive("/services")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`} onClick={()=>setMobileOpen(false)}>
            Services
            </Link>
            <Link to="/shop" className={`${isActive("/shop")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`} onClick={()=>setMobileOpen(false)}>
            Shop
            </Link>
            
            <Link to="/contact" className={`${isActive("/contact")?"text-primary":"text-white"}
            hover:text-primary duration-300 transition-colors`} onClick={()=>setMobileOpen(false)}>
            Contact
            </Link>
        </motion.div>
      )}
        
    </nav>
  )
}

export default Navbar