import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useAuth = () => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUser = window.localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

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

        // Guardamos el usuario en el localStorage
        window.localStorage.setItem("user", JSON.stringify(user));
        
        const loginInputs = document.querySelectorAll(".login-form input");
        loginInputs.forEach((input) => (input.value = ""));
        setIsLoggedIn(true);
        window.location.reload();
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
        window.localStorage.removeItem("user");
        setUser({});
        setIsLoggedIn(false);
        window.location.reload();
    };

    return {
        user,
        isLoggedIn,
        handleLogin,
        handleInputChange,
        handleLogout,
    };
};
