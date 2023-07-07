import React from 'react'
import  ReactDOM  from 'react-dom/client'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Contact from './components/Contact'
import Offer from './components/Offer'
import Cart from './components/Cart'
import About from './components/About'
import RestaurantMenu from './components/RestaurantMenu'
import AboutClass from './components/AboutClass'
const AppLayout =()=>{
    return (<>
    <Header/>
    <Outlet/>
    <Footer/>
    </>)
}

const Approuter = createBrowserRouter([
    {
        path :"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"/aboutclass",
                element:<AboutClass/>,
            },
                ]
            },
            {
                path:"/contact",
                element:<Contact/>,
            
            },
            {
                path:"/Offer",
                element:<Offer/>,
            
            },
            {
                path:"/cart",
                element:<Cart/>,
            }
            ,{
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
        ],
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Approuter}/>)

