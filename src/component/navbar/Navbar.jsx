import React from 'react'
import { RiArrowDropDownLine, RiSearch2Line } from 'react-icons/ri'
import './navbar.css'
import Logo from '../../Images/logo.png'
function Navbar() {
    return (
        <header>
            <nav>
                <ul className='nav-bar'>
                    <div className='nav-item'>
                        <img src={Logo} alt="logo" className='nav-Logo' />
                        <li>Home</li>
                        <div className='nav-drop-down'>
                            <li>Community   </li>
                                <RiArrowDropDownLine className='nav-drop-down-icon' />
                         
                        </div>
                        <li>Blog</li>
                        <li>Events</li>
                    </div>
                    <div className='nav-search-login'>
                        <RiSearch2Line className='nav-search-icon' />
                        <input type="text" placeholder='Search Here...' className='nav-search-input' />
                        <button className='nav-button'>Log in</button>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
