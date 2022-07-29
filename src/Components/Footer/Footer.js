import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <p>Copyright &copy; {new Date().getFullYear()}</p>
            <div className="developer">
                <em>Devil</em>
            </div>
        </footer>
    )
}

export default Footer
