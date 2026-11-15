import React from 'react'

export default function Cover() {
    return (
        <>
            <div className="w-full h-[240px] bg-[url('/src/assets/cover.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-3 my-8">
                <h1 className='text-[#FFF9F9] font-bold text-4xl text-shadow-lg'>you don't know what to cook today?</h1>
                <h2 className='text-[#FFF9F9] font-semibold text-3xl text-shadow-lg'>Try a surprise recipe</h2>
                <button type="button" class="text-[#363636] text-xl bg-[#FFE17B] box-border border border-transparent hover:bg-[#FFE56B] focus:ring-4 focus:ring-warning-medium shadow-xl/20 font-medium leading-5 rounded-base px-4 py-2.5 focus:outline-none cursor-pointer">Surprise Recipe</button>
            </div>
        </>
    )
}
