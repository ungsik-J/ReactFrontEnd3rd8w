import React, { useCallback, useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList'
import TodoInsert from './TodoInsert'
import TodoTemplate from './TodoTemplate'

import { comUtils } from '../common/js/comUtils'
import { comStyle } from '../common/style/comStyle';
const initialTodos = [
    { id: uuidv4(), text: "리액트 공부", checked: true },
    { id: uuidv4(), text: "자바 공부", checked: false },
    { id: uuidv4(), text: "자바스크립트 공부", checked: true },
    { id: uuidv4(), text: "파이썬 공부", checked: false }
]

const Todo = () => {

    const utils = comUtils();
    const uid = utils.uid;

    const [todos, setTodos] = useState(initialTodos);
    const handleInsert = useCallback((obj) => {
        setTodos(prev => [...prev, obj])
    }, [])
    const handleRemove = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };
    const handleChecked = (obj) => {
        setTodos(
            todos.map(todo =>
                todo.id === obj.id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }

    return (
        <div>
            <TodoTemplate>
                <TodoInsert
                    handleInsert={handleInsert}
                    nextId={uid}
                />
                <TodoList
                    key={uid}
                    todos={todos}
                    onRemove={handleRemove}
                    onChecked={handleChecked}
                />
            </TodoTemplate>
        </div>
    )
}

export default Todo