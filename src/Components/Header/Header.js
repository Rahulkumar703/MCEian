import React, { useState } from 'react'
import NavList from './NavList'
import NavTitle from './NavTitle'
import Theme from './Theme'
import './Header.css'
import Profile from './Profile'
import LoginSignup from './LoginSignup'

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <header>
            <NavTitle />
            <NavList />
            {isLoggedIn ? <Profile /> : <LoginSignup />}
            <Theme />
        </header>
    )
}

export default Header
