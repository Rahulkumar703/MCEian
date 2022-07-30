import React from 'react'
import { Link } from 'react-router-dom'
import './NavList.css'

function NavList() {
    return (
        <ul className="nav-list">
            <li className='nav-list-items'>
                <Link to='/'>
                    <i className="fi fi-rr-browser"></i>
                    <p>Posts</p>
                </Link>
            </li>
            <li className='nav-list-items'>
                <Link to='/'>
                    <i className="fi fi-rr-users-alt"></i>
                    <p>Users</p>
                </Link>
            </li>
        </ul>
    )
}

export default NavList
