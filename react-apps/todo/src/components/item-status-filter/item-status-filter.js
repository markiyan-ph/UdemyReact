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
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button" className = {`btn ${this.state.selectAll ? 'btn-info' : 'btn-outline-secondary'}`}>All</button>
                <button type="button" className= {`btn ${this.state.selectActive ? 'btn-info' : 'btn-outline-secondary'}`}>Active</button>
                <button type="button" className= {`btn ${this.state.selectDone ? 'btn-info' : 'btn-outline-secondary'}`}>Done</button>
            </div>
        );
    }
}