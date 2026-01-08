import React from 'react'
import { motion } from "motion/react";
import { useState } from 'react';
import toast from 'react-hot-toast';

function AllProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Absorptive Brush",
      rating: 4.8,
      price: "45",
      shortDesc: "High-quality brush designed for smooth application.",
      image: "/src/assets/product_1.png",
    },
    {
      id: 2,
      name: "Classic Razor",
      rating: 4.7,
      price: "60",
      shortDesc: "Precision stainless-steel razor for a clean shave.",
      image: "/src/assets/product_5.png",
    },
    {
      id: 3,
      name: "Hair Pomade",
      rating: 4.9,
      price: "55",
      shortDesc: "Premium pomade for all-day hold and shine.",
      image: "/src/assets/product_3.png",
    },
  ])

  const hadleDelete=async(id)=>{
    setProducts(products.filter(product=>product.id!==id))
    toast.success("Product deleted successfully")
  }
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4'>
      <div className='max-w-7xl mx-auto'>

        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl text-primary font-bold'>All Products</h1>
          <button className='bg-primary text-white px-6 py-3 font-semibold cursor-pointer hover:opacity-90'>Add Product</button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow overflow-hidden">

             <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-blue-700">
                <tr>
                  <th className='font-semibold text-gray-700 px-4 py-6'>
                    Product
                  </th>
                  <th className='font-semibold text-gray-700 px-4 py-4 text-left'>
                    Price
                  </th>
                  <th className='font-semibold text-gray-700 px-4 py-6'>
                    Rating
                  </th>
                  <th className='font-semibold text-gray-700 px-4 py-6'>
                    Description
                  </th>
                  <th className='font-semibold text-gray-700 px-4 py-6'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product)=>(
                  <motion.tr key={product.id} className='border-b border-gray-500'>
                    <td className='px-6 py-4 '>
                      <div className='flex justify-center items-center gap-3'>
                        <img src={product.image} alt={product.name} className='w-16 h-16' />
                        <span>{product.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        {product.price}
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div>
                        {product.rating}
                      </div>
                    </td>
                    
                    <td className='px-6 py-4'>
                      <div>
                        {product.shortDesc}
                      </div>
                    </td>
                    <td>
                      <div>
                        <button className='bg-primary text-white px-8 py-2 rounded cursor-pointer'
                        onClick={()=>hadleDelete(product.id)}>Delete</button>
                      </div>
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

export default AllProducts
