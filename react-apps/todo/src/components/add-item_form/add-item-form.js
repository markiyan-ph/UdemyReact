import React, { Component } from 'react';

import './add-item-form.css';

export default class AddItem extends Component {

    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onLabelChange = this.onLabelChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onLabelChange(e) {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ''
        });
    }
    
    render() {
        return (
            <form className="add-item-form d-flex flex-nowrap" onSubmit = { this.onSubmit }>
                <input type="text"
                    className="form-control"
                    onChange={ this.onLabelChange }
                    placeholder="What needs to be done"
                    value = { this.state.label } />

                <button
                    className="btn btn-outline-secondary">
                    Add item <i className="fa fa-plus"></i>
                </button>
            </form>
        );
    }
}