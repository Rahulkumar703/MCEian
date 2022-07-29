import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="title">
                <div className="logo"></div>
                <Link to='/'>
                    <h1>MCEian</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header
