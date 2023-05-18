import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import TotalItems from '../CartWidget/TotalItems'
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Navbar = () => {
  const { cart } = useContext(dataContext)
  return (
    <div className="nav-container">
        <nav className='navbar'>
            <Link className='navbar-logo' to={"/"}><h1 >🌙NutriLuna</h1></Link>
            <Link className='verCarrito' to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems/> : null}
              </Link>
            
        </nav>

    </div>
  )
}

export default Navbar