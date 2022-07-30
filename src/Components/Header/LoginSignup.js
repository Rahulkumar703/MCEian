import React from 'react'
import './LoginSignup.css'

function LoginSignup() {
    return (
        <div className='join'>
            <button>
                <i className="fi fi-rr-key"></i>
                <p>Login</p>
            </button>
            <button>
                <i className="fi fi-rr-user-add"></i>
                <p>Signup</p>
            </button>
        </div>
    )
}

export default LoginSignup
