import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = theme === "light" ? "light-mode" : "dark-mode";
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const themeContextValues = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeContextValues}>
            {children}
        </ThemeContext.Provider>
    );
};
