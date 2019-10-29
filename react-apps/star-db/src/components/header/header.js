import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
    const menuItems = [
        { title: 'People', link: '#/people' },
        { title: 'Planets', link: '#/planets' },
        { title: 'Starships', link: '#/starships' }
    ];

    const menu = menuItems.map((menuItem) => {
        const { title, link } = menuItem;

        return (
            <li key={title}>
                <a href={link}>{title}</a>
            </li>
        );
    });

    return (
        <div className="header d-flex">
            <h3>
                <a href="/#">
                    Star DB
                </a>
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