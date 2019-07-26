import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item_form';

import './app.css';

export default class App extends Component {

    // TODO Something
    constructor() {
        super();

        this.maxId = 100;
        this.state = {
            todoData: [
                this.createTodoItem('Drink coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            filterLabel: ''
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.filterData = this.filterData.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            showItem: true,
            id: this.maxId++
        };
    }

    addItem(text) {
        let newItem = this.createTodoItem(text);

        if (text.trim().length === 0) {
            return;
        }
        
        this.setState(({ todoData }) => {
            return {
                todoData: [...todoData, newItem],
            };
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        const newArray = [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

        return newArray;
    }

    onToggleImportant(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    onToggleDone(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    onSearch(text) {
        this.setState({ filterLabel: text });
    }

    filterData(todoData, text) {

        if (text === '') {
            return todoData;
        }

        const searchText = text.toLowerCase().trim();
        const filtered = todoData.filter((el) => el.label.toLowerCase().includes(searchText));

        return filtered;
    }

    deleteItem(id) {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            // Another possible variant
            // let newData = [...todoData];
            // newData.splice(idx, 1);

            return {
                todoData: newArray
            };
        });
    }

    render() {
        const { todoData, filterLabel } = this.state;
        const doneCount = todoData.filter((el) => el.done === true);
        const todoCount = todoData.length - doneCount.length;

        const filteredData = this.filterData(todoData, filterLabel);

        return (
            <div className='container mt-5'>
                <AppHeader toDo={todoCount} done={doneCount.length} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearch = { this.onSearch } />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={filteredData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <AddItem onAddItem={this.addItem} />
            </div>
        );
    }
}