import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faUser,
    faSun,
    faMoon,
    faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { useState, useContext, useCallback, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
import FramerMagnetic from "../FramerMagnetic/FramerMagnetic";

function NavBar() {
    // Estado de la pantalla del dispositivo
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    const [searchInput, setSearchInput] = useState("");
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navToggle = () => {
        setIsNavOpen(!isNavOpen);
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

    const menuItems = [
        { text: "Inicio", link: "/" },
        { text: "Categorías", link: "/" },
        { text: "Ofertas", link: "/" },
        { text: "Contacto", link: "/" },
    ];

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
        exit: {
            x: "100%",
            transition: {
                type: "spring",
                bounce: 0.4,
                staggerChildren: 0.1,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { bounce: 0.5, type: "spring" },
        },
        exit: { opacity: 0, x: 30 },
    };

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="nav-container">
                        <Link to="/" className="logo-button">
                            <p className="logo">MiTienda</p>
                        </Link>
                        <nav className="nav-menu">
                            {isMobile ? (
                                <>
                                    <AnimatePresence>
                                        {isNavOpen && (
                                            <motion.ul
                                                className="nav-menu-list"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={menuVariants}
                                            >
                                                {menuItems.map(
                                                    (item, index) => (
                                                        <motion.li
                                                            key={index}
                                                            className="nav-item"
                                                            variants={
                                                                itemVariants
                                                            }
                                                        >
                                                            <Link
                                                                to={item.link}
                                                                className="menu-item"
                                                                onClick={
                                                                    navToggle
                                                                }
                                                            >
                                                                {item.text}
                                                            </Link>
                                                        </motion.li>
                                                    )
                                                )}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                    <div
                                        className={`nav-toggler ${
                                            isNavOpen ? "toggle" : ""
                                        }`}
                                        onClick={navToggle}
                                    >
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                    </div>
                                </>
                            ) : (
                                <ul className="nav-menu-list">
                                    {menuItems.map((item, index) => (
                                        <FramerMagnetic key={index}>
                                            <li
                                                key={index}
                                                className="nav-item"
                                            >
                                                <Link
                                                    to={item.link}
                                                    className="menu-item"
                                                >
                                                    {item.text}
                                                </Link>
                                                <div className="dot"></div>
                                            </li>
                                        </FramerMagnetic>
                                    ))}
                                </ul>
                            )}
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
