import React from 'react'
import { Link } from 'react-router-dom'
import './NavList.css'

function NavList() {
    return (
        <ul className="nav-list">
            <li className='nav-list-items'>
                <Link to='/'>Posts</Link>
            </li>
            <li className='nav-list-items'>
                <Link to='/'>Users</Link>
            </li>
            <li className='nav-list-items'>
                <Link to='/'>Profile</Link>
            </li>
        </ul>
    )
}

export default NavList
