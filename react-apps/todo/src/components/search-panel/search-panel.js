import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
    constructor() {
        super();

        this.state = {
            searchText: ''
        };
        
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        const searchText = e.target.value;
        this.props.onSearch(searchText);
        this.setState({ searchText: searchText });
    }

    render() {
        const { searchText } = this.state;

        return (
            <input type = "text" 
                className = "form-control search-input" 
                onChange = { this.onSearch }
                placeholder = 'type to search'
                value = { searchText } />
        );
    }
}