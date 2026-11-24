import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Beef from './Pages/Categories/Beef';

function App() {
  const router = createBrowserRouter([
    {path: '', element: <Home/>, children: [
      {path: '/Category/Beef', element: <Beef/>}
    ]}
  ])


  return (
    <>

    </>
  )
}

export default App
