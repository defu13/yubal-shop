import "./LoginForm.css";
import { useAuth } from "../../hooks/useAuth";

function LoginForm() {
    const { user, isLoggedIn, handleLogin, handleLogout, handleInputChange } =
        useAuth();
    
    return (
        <div className="login-container">
            <h1 className="login-title">¡Inicia sesión!</h1>
            <form onSubmit={handleLogin} className="login-form">
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
                        <p>¿Quieres cerrar sesión, {user.name}?</p>
                        <hr />
                        <button
                            onClick={handleLogout}
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
    );
}

export default LoginForm;
