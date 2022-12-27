import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
    console.log('Navbar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                Navbar
                <span className="badge bg-pill bg-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}

// class NavBar extends Component {
//     render() { 
//     }
// }
 

export default NavBar;