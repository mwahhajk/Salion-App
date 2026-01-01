import React from 'react'
import { assets } from '../assets/assets'
import { MoveRight } from 'lucide-react'

function Banner() {
    return (
        <div className='py-12'>
            <div className='h-96 bg-cover bg-center ' style={{ backgroundImage: `url(${assets.banner1})` }}>
                <div className='flex flex-col gap-2 text-white items-center py-6 mx-auto max-w-md w-full 
                '>
                    <h1 className='text-4xl'>Offer Promotion</h1>
                    <h3 className='text-primary'>Our special hand made creme</h3>
                    <p className='text-center'>There are many variations of passages of Lorem Ipsum majority have is
                        suffered alteration in that some form believable.</p>
                    <button className='bg-primary text-white px-12 py-2 flex gap-2 mt-4 cursor-pointer'>
                        More <MoveRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner