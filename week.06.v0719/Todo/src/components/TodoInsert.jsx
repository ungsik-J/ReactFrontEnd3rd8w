import React, { useState, useEffect, useRef } from 'react';
import { MdAdd } from 'react-icons/md';

const formStyle = {
    display: 'flex',
    background: '#e9e9e9ff',
};

const inputStyle = {
    background: 'none',
    outline: 'none',
    border: 'none',
    padding: '0.5rem',
    fontSize: '1.125rem',
    lineHeight: '1.5',
    color: '#000',
    flex: 1,
};

const buttonStyle = {
    outline: 'none',
    border: 'none',
    background: '#868e96',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '0.1s background ease-in',
};

const TodoInsert = ({ nextId, handleInsert }) => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [text]);


    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        handleInsert({
            id: nextId,
            text: text.trim(),
            checked: false,
        });

        setText('');
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <input
                style={inputStyle}
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
                placeholder="할 일을 입력하세요"
                autoFocus
                ref={inputRef}
            />
            <button style={buttonStyle}>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;