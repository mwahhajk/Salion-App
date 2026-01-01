import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FaShoppingCart } from 'react-icons/fa'

function Product() {
  const{navigate,products}=useContext(AppContext)
  return (
    <div className='py-20 max-w-7xl mx-auto'>
      <h1 className='my-8 text-3xl text-center md:text-5xl font-bold text-primary'>Our Shop</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product,index)=>(
          <div key={product.id} className='bg-white shadow-lg border-2 border-primary mr-4 py-4'>
            <img src={product.images[0]} className='w-40 mx-auto' alt="" srcset="" />
            <h2 className='text-2xl text-center font-bold'>{product.name}</h2>
            <p className='text-lg text-center'>{product.rating}</p>
            <div className='flex justify-center gap-3 items-center py-4'>
              <p>{product.price}</p>
              <FaShoppingCart/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product