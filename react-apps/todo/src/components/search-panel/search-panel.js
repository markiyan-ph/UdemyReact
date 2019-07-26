import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearch, searchValue }) => {
    
    return (
        <input type = "text" 
            className = "form-control search-input" 
            onChange = { onSearch }
            placeholder = 'type to search'
            value = { searchValue } />
    );
};

export default SearchPanel;