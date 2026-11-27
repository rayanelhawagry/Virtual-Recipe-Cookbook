import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getAllMeals, getMealsByCategory } from '../Services/MealsServices'

export default function Categories() {
    const [mealsList, setMealsList] = useState(null)

    async function clickMeals(e) {
        let currentCategory = e.target.textContent
        if (currentCategory === 'All') {
            let data = await getAllMeals()
            setMealsList(data.meals)
        } else {
            let data = await getMealsByCategory(currentCategory)
            setMealsList(data.meals)
        }

        console.log(mealsList);
    }


    return (
        <>
            <div>
                <h1 className='text-[#363636] font-bold text-center text-3xl'>Categories</h1>
                <ul className='w-[90%] m-auto flex gap-8 flex-wrap my-8 justify-center'>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={''}>All</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Beef'}>Beef</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Breakfast'}>Breakfast</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Chicken'}>Chicken</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Dessert'}>Dessert</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Goat'}>Goat</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Lamb'}>Lamb</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Miscellaneous'}>Miscellaneous</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Pasta'}>Pasta</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Pork'}>Pork</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Seafood'}>Seafood</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Side'}>Side</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Starter'}>Starter</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Vegan'}>Vegan</NavLink></li>
                    <li><NavLink className='category-navlink' onClick={clickMeals} to={'/Category/Vegetarian'}>Vegetarian</NavLink></li>
                </ul>
            </div>
        </>
    )
}
