import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Beef from './Pages/Categories/Beef';
import Breakfast from './Pages/Categories/Breakfast';
import Chicken from './Pages/Categories/Chicken';
import Dessert from './Pages/Categories/Dessert';
import Goat from './Pages/Categories/Goat';
import Lamb from './Pages/Categories/Lamb';
import Miscellaneous from './Pages/Categories/Miscellaneous';
import Pasta from './Pages/Categories/Pasta';
import Pork from './Pages/Categories/Pork';
import Seafood from './Pages/Categories/Seafood';
import Side from './Pages/Categories/Side';
import Starter from './Pages/Categories/Starter';
import Vegan from './Pages/Categories/Vegan';
import Vegetarian from './Pages/Categories/Vegetarian';

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/Category/Beef', element: <Beef /> },
        { path: '/Category/Breakfast', element: <Breakfast /> },
        { path: '/Category/Chicken', element: <Chicken /> },
        { path: '/Category/Dessert', element: <Dessert /> },
        { path: '/Category/Goat', element: <Goat /> },
        { path: '/Category/Lamb', element: <Lamb /> },
        { path: '/Category/Miscellaneous', element: <Miscellaneous /> },
        { path: '/Category/Pasta', element: <Pasta /> },
        { path: '/Category/Pork', element: <Pork /> },
        { path: '/Category/Seafood', element: <Seafood /> },
        { path: '/Category/Side', element: <Side /> },
        { path: '/Category/Starter', element: <Starter /> },
        { path: '/Category/Vegan', element: <Vegan /> },
        { path: '/Category/Vegetarian', element: <Vegetarian /> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
