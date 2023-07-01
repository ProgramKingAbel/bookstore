import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'Categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
