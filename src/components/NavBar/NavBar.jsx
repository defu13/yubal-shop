import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faHeart,
    faUser,
    faSun,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function NavBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(searchInput.trim());
        }
    };

    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleThemeAction = () => {
        toggleTheme();
        // const button = document.getElementById("theme-button");
        // button.classList.toggle("active");
    };

    return (
        <>
            <header>
                <div className="nav-bar">
                    <div className="nav-container">
                        <a href="#">
                            <p className="logo">MiTienda</p>
                        </a>
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
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} />
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
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
