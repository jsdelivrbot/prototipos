import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer style={{ 'border':'solid black 1px' }}>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/resources">Resources</Link></div>
  </footer>
);

export default Footer;