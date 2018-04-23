import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <ul style={{ 'border':'solid black 1px' }}>
    <li><Link to="/">Home</Link></li>
  </ul>
);

export default Header;