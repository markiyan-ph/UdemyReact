import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const { id, showItem, ...itemProps } = item;

        if (showItem) {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        {...itemProps}
                        onDeleted={() => onDeleted(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                    />
                </li>
            );
        }

        return false;
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;