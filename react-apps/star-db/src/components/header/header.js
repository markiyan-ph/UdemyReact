import React from 'react';

import './header.css';

const Header = () => {
    const menuItems = [
        { title: 'People', link: '#' },
        { title: 'Planets', link: '#' },
        { title: 'Starships', link: '#' }
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
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                {menu}
            </ul>
        </div>
    );
};

export default Header;