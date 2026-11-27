import axios from "axios";

export async function getAllMeals() {
    try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        return data
    } catch (error) {
        return error
    }
}

export async function getMealsByCategory(currentCategory) {
    try {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentCategory}`)
        return data
    } catch (error) {
        return error
    }
}
