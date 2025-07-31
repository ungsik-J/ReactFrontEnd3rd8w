import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext("light");

const Toolbar = () => {
    return <ThemedButton />;
};

const ThemedButton = () => {
    const theme = useContext(ThemeContext);



    return (
        <button
            style={{
                background: theme === 'dark' ? '#333' : '#ccc',
                color: theme === 'dark' ? '#fff' : '#000',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onClick={() => {
                const bgcolor = (theme == 'dark' ? '#333' : '#ccc')
                window.document.getElementsByTagName("body")[0].style.backgroundColor = bgcolor
            }}
        >
            Theme: {theme}
        </button>
    );
};

export default function UseContext() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: '20px' }}>
                <Toolbar />
                <br />
                <button onClick={toggleTheme} style={{ marginTop: '10px' }}>
                    Toggle Theme
                </button>
            </div>
        </ThemeContext.Provider>
    );
}
