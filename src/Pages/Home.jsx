import React from 'react'
import Cover from '../Components/Cover'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import Card from './../Components/Card';

export default function Home() {
    return (
        <>
            <Cover />
            <SearchBar />
            <Categories />
            <div className="MealsCards my-8 container w-[90%] m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}
