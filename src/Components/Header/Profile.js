import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <ul className='profile'>

            <li className='nav-list-items'>
                <Link to='/'>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <p>Profile</p>
                </Link>
            </li>
        </ul>
    )
}

export default Profile
