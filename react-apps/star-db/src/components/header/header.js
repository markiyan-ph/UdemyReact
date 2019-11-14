import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = ({ onServiceChange }) => {
    const menuItems = [
        { title: 'People', link: '/people/' },
        { title: 'Planets', link: '/planets/' },
        { title: 'Starships', link: '/starships/' }
    ];

    const menu = menuItems.map((menuItem) => {
        const { title, link } = menuItem;

        return (
            <li key={title}>
                <Link to={link}>{title}</Link>
            </li>
        );
    });

    return (
        <div className="header d-flex">
            <h3>
                <Link to='/' >Star DB</Link>
            </h3>
            <ul className="d-flex">
                {menu}
                <button
                    className="btn btn-primary btn-sm"
                    onClick={onServiceChange}>
                    Change service
                </button>
            </ul>
        </div>
    );
};

export default Header;