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

    const handleLogin = (formData, location, navigate) => {
        // Determinar rol de usuario
        const role = formData.email.includes("@admin.") ? "admin" : "user";

        // Guardamos el usuario en el localStorage
        const userWithRole = { ...formData, role };
        setUser(userWithRole);
        setItem(userWithRole);
        setIsLoggedIn(true);
        navigate(location.state ? location.state.pathname : "/");
        toast.success("Sesión iniciada correctamente");
    };

    // const validateEmail = (email) => {
    //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return re.test(String(email).toLowerCase());
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser((prevUser) => ({ ...prevUser, [name]: value }));
    // };

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
    };

    return (
        <AuthContext.Provider value={AuthContextValues}>
            {children}
        </AuthContext.Provider>
    );
};