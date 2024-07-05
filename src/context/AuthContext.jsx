import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "", email: "", role: "" });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const { setItem, getItem, removeItem } = useLocalStorage("user");

    useEffect(() => {
        const storedUser = getItem();
        if (storedUser) {
            setUser(storedUser);
            setIsLoggedIn(true);
        }
        setAuthChecked(true);
    }, []);

    const handleLogin = () => {

        if (!user.name || !user.email) {
            const errorMessage = "Por favor, rellena todos los campos";
            toast.error(errorMessage);
            return;
        }

        if (!validateEmail(user.email)) {
            const errorMessage =
                "Por favor, introduce un correo electrónico válido";
            toast.error(errorMessage);
            return;
        }

        // Determinar rol de usuario
        const role = user.email.includes("@admin.") ? "admin" : "user";

        // Guardamos el usuario en el localStorage
        const userWithRole = { ...user, role };
        setUser(userWithRole);
        setItem(userWithRole);
        
        const loginInputs = document.querySelectorAll(".login-form input");
        loginInputs.forEach((input) => (input.value = ""));
        setIsLoggedIn(true);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleLogout = () => {
        removeItem();
        setUser({});
        setIsLoggedIn(false);
    };

    const AuthContextValues = {
        user,
        isLoggedIn,
        authChecked,
        handleLogin,
        handleLogout,
        handleInputChange,
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    );
};