import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <ul style={{ 'border':'solid black 1px' }}>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/resources">Resources</Link></li>
  </ul>
);

export default Footer;