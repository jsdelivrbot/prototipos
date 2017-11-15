import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    nav_menu(link){
        link.target.parentNode.parentNode.parentNode.className = 'collapse navbar-collapse';
        window.scrollTo(0, 0)  
    }

    render(){
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/rosario_construction" onClick={ window.scrollTo(0, 0) } replace>Strong Construction & Service</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction" onClick={ this.nav_menu } replace>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/about" onClick={ this.nav_menu } replace>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/services" onClick={ this.nav_menu } replace>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/contact" onClick={ this.nav_menu } replace>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/rosario_construction/login" onClick={ this.nav_menu } replace>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;