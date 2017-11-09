import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    nav_menu(button){
        console.log(button.target.parentNode)
    }
    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/rosario_construction">Strong Construction & Service</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={ this.nav_menu }>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;