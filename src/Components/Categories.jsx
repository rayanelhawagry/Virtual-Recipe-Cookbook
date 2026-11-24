import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <>
            <div>
                <h1>Categories</h1>
                <ul>
                    {/* <li><NavLink>All</NavLink></li> */}
                    <li><NavLink>Beef</NavLink></li>
                    <li><NavLink>Breakfast</NavLink></li>
                    <li><NavLink>Chicken</NavLink></li>
                    <li><NavLink>Dessert</NavLink></li>
                    <li><NavLink>Goat</NavLink></li>
                    <li><NavLink>Lamb</NavLink></li>
                    <li><NavLink>Miscellaneous</NavLink></li>
                    <li><NavLink>Pasta</NavLink></li>
                    <li><NavLink>Pork</NavLink></li>
                    <li><NavLink>Seafood</NavLink></li>
                    <li><NavLink>Side</NavLink></li>
                    <li><NavLink>Starter</NavLink></li>
                    <li><NavLink>Vegan</NavLink></li>
                    <li><NavLink>Vegetarian</NavLink></li>
                </ul>
            </div>
        </>
    )
}
