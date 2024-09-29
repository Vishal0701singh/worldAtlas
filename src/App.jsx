
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './ui/layput/Layout'
import Home from './component/home/Home'
import About from './component/about/About'
import Country from './component/country/Country'
import Contact from './component/contact/Contact'
import { CountryDetails } from './ui/layput/CountryDetails'
import ErrorPage from './ui/layput/ErrorPage'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"about",
          element: <About/>
        },
        {
          path:"country",
          element: <Country/>
        },
        {
          path:"country/:id",
          element: <CountryDetails/>
        },
        {
          path:"contact",
          element: <Contact/>
        },
      ]

    },
  ])


  return <RouterProvider router={router}/>
}

export default App
