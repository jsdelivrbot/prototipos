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
                    <Link className="navbar-brand" to="/evergarcia.com/rosario_construction">Strong Construction & Service</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={ this.nav_menu }>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/evergarcia.com/rosario_construction">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/evergarcia.com/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/evergarcia.com/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/evergarcia.com/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/evergarcia.com/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;