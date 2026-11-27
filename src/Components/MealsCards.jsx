import React from 'react'
import Card from './Card'

export default function MealsCards() {
    return (
        <>
            <div className='my-8 container w-[90%] m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
