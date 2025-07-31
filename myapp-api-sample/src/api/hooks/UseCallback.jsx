import React, { useState, useCallback, Component } from 'react';


const Button = React.memo(({ onClick, children }) => {
    console.log('🔁 Button 렌더링:', children);
    return <button onClick={onClick}>{children}</button>;
});


export default function UseCallback() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // useCallback 없이 함수 생성 시 매 렌더마다 새로운 함수 생성 → 자식 컴포넌트 리렌더링됨
    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, [text]);

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="입력하세요"
            />
            <p>Count: {count}</p>
            <Button onClick={handleClick}>증가</Button>
        </div>
    );
}
