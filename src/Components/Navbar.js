import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">
                    Contact Diary
                </a>
                <a href="#" className="btn btn-light ml-auto">
                    Create Contact
                </a>
            </div>
        </nav>
    )
}

export default Navbar
