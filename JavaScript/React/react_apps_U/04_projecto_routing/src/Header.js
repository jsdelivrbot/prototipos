import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/One'>One</Link></li>
                        <li><Link to='/Two'>Two</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;