import React, { useState } from 'react'
import "./Navbar.css"
import logoImg from "../../images/logo.png"
import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)
  const handleNavBar = () => setToggleMenu(!ToggleMenu);

  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>BookHub</span>
          </Link>
          <button type='button' className='navbar-toggler-btn' onClick={handleNavBar}>
            <HiOutlineMenuAlt3 size={35} style={{ color: `${ToggleMenu ? "#fff" : "#010101"}` }} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
