import React from 'react'
import Nav from '../Components/Nav'
import Cover from '../Components/Cover'
import Footer from '../Components/Footer'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'

export default function Home() {
    return (
        <>
            <Nav />
            <Cover />
            <SearchBar />
            <Categories />
            <Footer />
        </>
    )
}
