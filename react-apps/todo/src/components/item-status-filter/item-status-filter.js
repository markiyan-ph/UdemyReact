import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    constructor() {
        super();

        this.state = {
            selectAll: true,
            selectActive: false,
            selectDone: false
        };

        this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'active', label: 'Active' },
            { name: 'done', label: 'Done' },
        ];
    }

    render() {
        const { filter, onFilterClick } = this.props;

        const filterButtons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const activeClass = `btn ${isActive ? 'btn-info' : 'btn-outline-secondary'}`;

            return (
                <button type="button"
                    className={activeClass}
                    key={name}
                    onClick={() => onFilterClick(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {filterButtons}
            </div>
        );
    }
}