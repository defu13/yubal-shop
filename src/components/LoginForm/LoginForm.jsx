import "./LoginForm.css";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

function LoginForm() {
    const { user, isLoggedIn, handleLogin, handleLogout, handleInputChange } =
        useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    
    const handleLoginNavigate = () => {
        handleLogin();
        navigate(location.state ? location.state.pathname : "/");
    }

    const handleLogoutNavigate = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h1 className="login-title">¡Inicia sesión!</h1>
                <form onSubmit={handleLoginNavigate} className="login-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input
                            placeholder="Nombre"
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Correo electrónico"
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleInputChange}
                        />
                    </div>
                    {isLoggedIn ? (
                        <div>
                            <p className="logout-message">¿Quieres cerrar sesión, {user.name}?</p>
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
