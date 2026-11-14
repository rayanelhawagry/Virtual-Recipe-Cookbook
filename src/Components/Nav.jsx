import React from 'react'
import logo from '../assets/logo.png'

export default function Nav() {
    return (
        <>
        <div className='bg-amber-400 w-full'>
            <img className='' src={logo} alt="Logo" />
        </div>

        <h1 className='text-red-800'>TailwindCSS</h1>
        </>
    )
}
