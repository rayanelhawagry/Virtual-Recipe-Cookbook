import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <>
            <div>
                <h1 className='text-[#363636] font-bold text-center text-3xl'>Categories</h1>
                <ul className='w-[90%] m-auto flex gap-8 flex-wrap my-8 justify-center'>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={''}>All</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Beef'}>Beef</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Breakfast'}>Breakfast</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Chicken'}>Chicken</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Dessert'}>Dessert</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Goat'}>Goat</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Lamb'}>Lamb</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Miscellaneous'}>Miscellaneous</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Pasta'}>Pasta</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Pork'}>Pork</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Seafood'}>Seafood</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Side'}>Side</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Starter'}>Starter</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Vegan'}>Vegan</NavLink></li>
                    <li><NavLink className='p-3 rounded-base text-black text-lg shadow-md/20 font-medium bg-[#FFE17B] hover:bg-[#FFE56B]' to={'/Category/Vegetarian'}>Vegetarian</NavLink></li>
                </ul>
            </div>
        </>
    )
}
