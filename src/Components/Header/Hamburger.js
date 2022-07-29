import React, { useState } from 'react'
import './Hamburger.css'

function Hamburger() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={isActive ? 'hamburger active' : 'hamburger'} onClick={() => setIsActive(!isActive)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger
