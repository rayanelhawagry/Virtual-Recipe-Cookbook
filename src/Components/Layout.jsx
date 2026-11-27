import React from 'react'
import Nav from './Nav';
import Footer from './Footer';
import Cover from './Cover';
import SearchBar from './SearchBar';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
