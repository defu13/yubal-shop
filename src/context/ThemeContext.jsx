import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const { setItem, getItem } = useLocalStorage("theme");

    const [theme, setTheme] = useState(() => {
        const savedTheme = getItem();
        return savedTheme ? savedTheme : "light";
    });


    useEffect(() => {
        document.body.className = theme === "light" ? "light-mode" : "dark-mode";
        // Guardar el tema en localStorage
        setItem(theme);
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
