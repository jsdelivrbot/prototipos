import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header style={{ 'border':'solid black 1px', 'position':'', 'backgroundColor': 'white' }}>
    <div><Link to="/">Home</Link></div>
  </header>
);

export default Header;