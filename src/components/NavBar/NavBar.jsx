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

function NavBar({ onSearch, onViewChange }) {
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

    const handleCartClick = () => {
        onViewChange("cart"); // Cambiar la vista al hacer clic en el icono del carrito
    };

    // Calcular el total de productos en el carrito
    const totalProductsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <header>
                <div className="nav-bar">
                    <div className="nav-container">
                        <button className="logo-button" onClick={() => onViewChange("products")}>
                            <p className="logo">MiTienda</p>
                        </button>
                        <a href="#" className="menu-item">
                            INICIO
                        </a>
                        <a href="#" className="menu-item">
                            CATEGORÍAS
                        </a>
                        <a href="#" className="menu-item">
                            OFERTAS
                        </a>
                        <a href="#" className="menu-item">
                            CONTACTO
                        </a>
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
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <button
                                id="theme-button"
                                onClick={toggleThemeAction}
                            >
                                <FontAwesomeIcon
                                    icon={
                                        theme === "light"
                                            ? faMoon
                                            : faSun
                                    }
                                />
                            </button>
                            <a href="#" onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faBagShopping}/>
                                {cartItems.length > 0 && (
                                    <span className="cart-bubble">
                                        {totalProductsInCart}
                                    </span>
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
