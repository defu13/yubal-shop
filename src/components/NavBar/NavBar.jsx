import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faUser,
    faSun,
    faMoon,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function NavBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cartItems } = useContext(CartContext);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(searchInput.trim());
        }
    };

    const toggleThemeAction = () => {
        toggleTheme();
    };

    // Calcular el total de productos en la cesta
    const totalProductsInCart = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="nav-container">
                        <Link to="/" className="logo-button">
                            <p className="logo">MiTienda</p>
                        </Link>
                        <Link to="/" className="menu-item">
                            Inicio
                        </Link>
                        <Link className="menu-item" to="/">Categorías</Link>
                        <Link className="menu-item" to="/">Ofertas</Link>
                        <Link className="menu-item" to="/">Contacto</Link>
                    </div>
                    <div className="nav-container">
                        <input
                            className="search-bar"
                            type="text"
                            placeholder="Buscar productos"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <div className="icons-container">
                            <Link to="/login">
                                <button>
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                            </Link>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <button
                                id="theme-button"
                                onClick={toggleThemeAction}
                            >
                                <FontAwesomeIcon
                                    icon={theme === "light" ? faMoon : faSun}
                                />
                            </button>
                            <Link to="/cart">
                                <div className="icon-button">
                                    <FontAwesomeIcon icon={faBagShopping} />
                                    {cartItems.length > 0 && (
                                        <span className="cart-bubble">
                                            {totalProductsInCart}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavBar;
