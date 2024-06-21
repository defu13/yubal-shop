import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faHeart,
    faUser,
} from "@fortawesome/free-regular-svg-icons";
import "./NavBar.css";
import { useState } from "react";

function NavBar({ onSearch }) {
    const [searchInput, setSearchInput] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearch(searchInput.trim());
        }
    };

    return (
        <>
            <header>
                <div className="nav-bar">
                    <div className="nav-container">
                        <p className="logo">MiTienda</p>
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
                                <FontAwesomeIcon icon={faCreditCard} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
