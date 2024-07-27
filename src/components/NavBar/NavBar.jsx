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
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../hooks/useTheme";

function NavBar() {
    const [searchInput, setSearchInput] = useState("");
    const [activeNav, setActiveNav] = useState("nav-menu-list");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");

    const navToggle = () => {
        if (activeNav === "nav-menu-list") {
            setActiveNav("nav-menu-list nav-active");
            setToggleIcon("nav-toggler toggle");
        } else {
            setActiveNav("nav-menu-list");
            setToggleIcon("nav-toggler");
        }
    };

    const { theme, toggleTheme } = useTheme();
    const { cartItems } = useContext(CartContext);
    const { setSearchQuery } = useSearch();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchQuery(searchInput.trim());
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
                        <nav className="nav-menu">
                            <ul className={activeNav}>
                                <li className="nav-item">
                                    <Link to="/" className="menu-item" onClick={navToggle}>
                                        Inicio
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="menu-item" onClick={navToggle}>
                                        Categorías
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="menu-item" onClick={navToggle}>
                                        Ofertas
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="menu-item" onClick={navToggle}>
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                            <div className={toggleIcon} onClick={navToggle}>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </nav>
                    </div>
                    <div className="nav-container">
                        <input
                            className="search-bar"
                            type="text"
                            placeholder="Pulsa Enter para buscar"
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
