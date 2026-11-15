import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <>
            <div className='bg-[#DAE2B6] w-full flex flex-col items-center py-2'>
                <div>
                    <img width={60} height={60} src={logo} alt="Logo" />
                </div>
                <h1 className='text-[#606C5D] text-lg font-semibold mt-1'>FINDTOEAT</h1>
            </div>
        </>
    )
}
