import React from 'react'

export default function SearchBar() {
    return (
        <>
            <form className="flex items-center w-[70%] m-auto gap-3 my-[40px]">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="simple-search" className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-base ps-9 text-heading text-[#363636] text-xl focus:ring-[#FFE17B] focus:border-[#FFE17B] block w-full placeholder:text-body shadow-md/20" placeholder="Search by ingredient..." required />
                </div>
                <button type="submit" className="inline-flex items-center justify-center shrink-0 text-black bg-[#FFE17B] hover:bg-[#FFE56B] focus:ring-4 focus:ring-brand-medium shadow-md/20 rounded-base w-13 h-13 focus:outline-none cursor-pointer">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </form>
        </>
    )
}
