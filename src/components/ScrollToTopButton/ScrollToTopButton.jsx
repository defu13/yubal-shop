import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar botón al hacer scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Hacer scroll
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Manejador de scroll
    useEffect(() => {
        const scrollHandler = () => {
            toggleVisibility();
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? "visible" : ""}`}>
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-button">
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            )}
        </div>
    );
};

export default ScrollToTopButton;
