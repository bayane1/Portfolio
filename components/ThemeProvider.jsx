import { Children, createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {

    const themeState = useState('light')
    return <ThemeContext.Provider value={themeState} >
        {children}

    </ThemeContext.Provider>
}

export function useTheme() {
   const themeState  =  useContext(ThemeContext);

   return themeState;
}