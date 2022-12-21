import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "../Components/Navbar.css"
export const Navbar = () => {
  return (
    <div class = "navbar">
        <div class = "links">
       
   
        <Link to="/"> Home</Link>
<Link to="/cart"><ShoppingCart size = {32}></ShoppingCart></Link>
 
   
        </div>
    </div>
  )
}
