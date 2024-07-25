import "./LoginForm.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
    const { user, isLoggedIn, handleLogin, handleLogout } =
        useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        trigger,
    } = useForm();
    const password = watch("password");

    // Función de inicio de sesión
    const onSubmit = (data) => {
        handleLogin(data, location, navigate);
    };

    // Función de cierre de sesión
    const handleLogoutNavigate = () => {
        handleLogout();
        navigate("/");
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1 className="login-title">
                    {isLoggedIn ? "Tu cuenta" : "¡Inicia sesión!"}
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    {!isLoggedIn && (
                        <>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", {
                                        required:
                                            "Por favor, introduce tu nombre",
                                        minLength: {
                                            value: 2,
                                            message:
                                                "El nombre debe contener al menos 2 caracteres",
                                        },
                                        maxLength: {
                                            value: 25,
                                            message:
                                                "El nombre no puede superar los 25 caracteres",
                                        },
                                    })}
                                    onBlur={() => trigger("name")}
                                />
                                {errors.name && (
                                    <p className="error-message">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                        required:
                                            "Por favor, introduce tu correo electrónico",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message:
                                                "Por favor, introduce un correo electrónico válido",
                                        },
                                    })}
                                    onBlur={() => trigger("email")}
                                />
                                {errors.email && (
                                    <p className="error-message">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required:
                                            "Por favor, introduce tu contraseña",
                                    })}
                                    onBlur={() => trigger("password")}
                                />
                                {errors.password && (
                                    <p className="error-message">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <div className="form-group">
                                <label htmlFor="repeatPassword">
                                    Repetir contraseña
                                </label>
                                <input
                                    type="password"
                                    id="repeatPassword"
                                    {...register("repeatPassword", {
                                        required: "Por favor, repite tu contraseña",
                                        validate: (value) =>
                                            value === password ||
                                            "Las contraseñas deben coincidir",
                                    })}
                                    onBlur={() => trigger("repeatPassword")}
                                />
                                {errors.repeatPassword && (
                                    <p className="error-message">
                                        {errors.repeatPassword.message}
                                    </p>
                                )}
                            </div>
                        </>
                    )}
                    {isLoggedIn ? (
                        <div>
                            <p className="logout-message">
                                ¿Quieres cerrar sesión, {user.name}?
                            </p>
                            <hr />
                            <button
                                onClick={handleLogoutNavigate}
                                className="logout-button"
                            >
                                Cerrar sesión
                            </button>
                        </div>
                    ) : (
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
