import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <>
            <div>
                <h1>Categories</h1>
                <ul>
                    <li><NavLink to={''}>All</NavLink></li>
                    <li><NavLink to={'/Category/Beef'}>Beef</NavLink></li>
                    <li><NavLink to={'/Category/Breakfast'}>Breakfast</NavLink></li>
                    <li><NavLink to={'/Category/Chicken'}>Chicken</NavLink></li>
                    <li><NavLink to={'/Category/Dessert'}>Dessert</NavLink></li>
                    <li><NavLink to={'/Category/Goat'}>Goat</NavLink></li>
                    <li><NavLink to={'/Category/Lamb'}>Lamb</NavLink></li>
                    <li><NavLink to={'/Category/Miscellaneous'}>Miscellaneous</NavLink></li>
                    <li><NavLink to={'/Category/Pasta'}>Pasta</NavLink></li>
                    <li><NavLink to={'/Category/Pork'}>Pork</NavLink></li>
                    <li><NavLink to={'/Category/Seafood'}>Seafood</NavLink></li>
                    <li><NavLink to={'/Category/Side'}>Side</NavLink></li>
                    <li><NavLink to={'/Category/Starter'}>Starter</NavLink></li>
                    <li><NavLink to={'/Category/Vegan'}>Vegan</NavLink></li>
                    <li><NavLink to={'/Category/Vegetarian'}>Vegetarian</NavLink></li>
                </ul>
            </div>
        </>
    )
}
