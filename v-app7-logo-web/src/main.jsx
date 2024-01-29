import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx' 
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
       createRoutesFromElements(
           <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='github' element={<Github />} />        
           </Route>
       )
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router} />
 
)
