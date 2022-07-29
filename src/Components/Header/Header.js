import React from 'react'
import NavList from './NavList'
import NavTitle from './NavTitle'
import Theme from './Theme'
import './Header.css'
import Hamburger from './Hamburger'

function Header() {
    return (
        <header>
            <NavTitle />
            <NavList />
            <Theme />
            <Hamburger />
        </header>
    )
}

export default Header
