import React, { useState, useCallback } from 'react';

export default function UseState() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);

    const addTodo = useCallback(() => {
        const trimmed = input.trim();
        if (!trimmed) return;

        setTodos(prev => [
            ...prev,
            { id: Date.now(), text: trimmed, completed: false }
        ]);
        setInput('');
    }, [input]);

    const toggleTodo = useCallback((id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-2">📋 할 일 목록</h2>
            <div className="flex gap-2 mb-4">
                <input
                    className="border p-2 flex-1"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="할 일을 입력하세요"
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    추가
                </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="flex justify-between items-center mb-2">
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
                        >
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500"
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
