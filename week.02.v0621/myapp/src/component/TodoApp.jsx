import React, { useReducer, useRef } from 'react';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
};

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, { id: Date.now(), name: action.payload, complete: false }];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo =>
                todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo
            );
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload);
        default:
            return todos;
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, []);
    const inputRef = useRef();

    const handleAdd = () => {
        const name = inputRef.current.value.trim();
        if (name) {
            dispatch({ type: ACTIONS.ADD_TODO, payload: name });
            inputRef.current.value = '';
        }
    };

    return (
        <div>
            <input ref={inputRef} placeholder="할 일을 입력하세요" />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })}
                            />
                            {todo.name}
                        </label>
                        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
