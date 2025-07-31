import React, {createContext, useState} from 'react'


const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const contextValue = {theme, setTheme}
  return (
    <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider, ThemeContext};




