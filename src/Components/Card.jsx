import React from 'react'
import pizza from '../assets/pizza.jpg'

export default function Card() {
    return (
        <>
            <div className='shadow-lg/20 flex flex-col justify-center items-center my-2'>
                <div>
                    <img src={pizza} alt="pizza" />
                </div>
                <div className='p-3'>
                    <h2 className='text-[#363636] font-bold text-center text-xl'>Pizza</h2>
                    <button className='p-3 rounded-base text-black text-sm shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#F2CE4F] duration-300 cursor-pointer my-3'>View Recipe</button>
                </div>
            </div>
        </>
    )
}
