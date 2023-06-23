import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { path: '/', text: 'Books' },
    { path: 'Categories', text: 'Categories' },
]

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


export default Navbar