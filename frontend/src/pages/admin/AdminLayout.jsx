import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';


import {
  LayoutDashboard,
  Plus,
  Package,
  Grid3X3,
  ShoppingCart,
  BookAIcon,
  X,
  Menu,
} from "lucide-react";
import toast from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';

function AdminLayout() {

  const[sidebarOpen,setSidebarOpen]=useState(false);
  const{setAdmin,navigate}=useContext(AppContext)

  const location=useLocation();
  console.log(location);
  
  const menuItems = [
    {
      path: "/admin",
      name: "Products",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      path: "/admin/add-product",
      name: "Add Product",
      icon: Plus,
    },
    {
      path: "/admin/add-service",
      name: "Add Service",
      icon: Package,
    },

    {
      path: "/admin/services",
      name: "All Services",
      icon: Grid3X3,
    },
    {
      path: "/admin/orders",
      name: "Orders",
      icon: ShoppingCart,
    },
    {
      path: "/admin/bookings",
      name: "Bookings",
      icon: BookAIcon,
    },
  ];

  const logout=async()=>{
    try{
    setAdmin(false)
    toast.success("User Logout successfully")
    console.log("User Logout successfully");
    navigate("/admin/")
    }
    catch(err)
    {
      console.log(err);
      
    }
    
  }

  const isActive=(path,exact=false)=>{
    if(exact)
    {
      return location.pathname===path
    }
    return location.pathname===path
  }

  return (
     <div className="flex h-screen bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-lg hover:bg-gray-50 transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* side bar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className='flex flex-col h-full'>
            <div className="flex items-center justify-center h-16 px-4 bg-secondary text-black">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <nav className='flex-1 px-4 py-4 space-y-2 overflow-y-auto '>
            {menuItems.map((item,index)=>{
              const Icon=item.icon;
              const active=isActive(item.path,item.exact);
              return(
                <Link key={item.path} to={item.path}
                className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                    ${
                      active
                        ? "bg-blue-100 text-primary border-r-4 border-primary"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* footer */}

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-500">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div className="font-medium text-gray-900"> Admin User</div>
                <div>admin@example.com</div>
              </div>
            </div>
          </div>
        
      
          </div>
        </div>

      {/* mobile overlay */}


      {/* Main Content */}
      <div></div>
      </div>
  )
}

export default AdminLayout
