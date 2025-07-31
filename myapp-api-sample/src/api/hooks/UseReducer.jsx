import React, { useReducer, useState } from 'react'


const COUNT_REDUCER = () => {
    const initialState = { count: 0 }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
                break;
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <p>count : {state.count}</p>
                <button onClick={() => { dispatch({ type: "decrement" }) }} >[-]decrement</button>
                <button onClick={() => { dispatch({ type: "increment" }) }} >[+]increment</button>
            </div>
        </>
    )
}

const TODO_REDUCER = () => {

    const initialState = []
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD-TODO':
                return [...state, { id: Date.now(), text: action.text, completed: false }]
            case 'TOGGLE-TODO':
                return state.map(todo => {
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                })
            case 'DELETE-TODO':
                return state.filter(todo => todo.id !== action.id)
            default:
                return state;
        }
    }

    // App /////////////////////////////////////////////////////////////////////

    return (
        <>
            <h2>TODO_REDUCER</h2>
        </>
    )
}

export default function UseReducer() {
    return (
        <>
            <div>
                <TODO_REDUCER />
            </div>
        </>

    )
}
