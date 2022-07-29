import React from 'react'
import { Link } from 'react-router-dom'
import './NavTitle.css'
import logo from '../../Assets/images/apple-icon-120x120.png';

function NavTitle() {
    return (
        <div className="title">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Link to='/' className='title-link'>
                <h1>MCEian</h1>
            </Link>
        </div>
    )
}

export default NavTitle
