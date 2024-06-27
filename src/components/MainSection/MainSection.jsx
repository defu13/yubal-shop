import "./MainSection.css";
import ProductList from "../ProductList/ProductList.jsx";
import CartContent from "../CartContent/CartContent.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth.js";

function MainSection({ searchQuery, view }) {
    const { theme } = useContext(ThemeContext);
    const { user, isLoggedIn } = useAuth();

    const bannerMessages = {
        nologged: "¡Crea una cuenta para obtener descuentos!",
        logged: "¡" + user.name + " ,aprovechaté de un descuento del 20%!",
    };

    const [bannerText, setBannerText] = useState(bannerMessages.nologged);

    useEffect(() => {
        if (isLoggedIn) {
            setBannerText(bannerMessages.logged);
        } else {
            setBannerText(bannerMessages.nologged);
        }
    }, [isLoggedIn]);

    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                transition={Bounce}
                theme={theme === "light" ? "dark" : "light"}
            />

            <div className="main-container">
                <div className="discount-banner">
                    <h2 className="banner-text">{bannerText}</h2>
                </div>
                <section className="main-section">
                    {view === "products" ? (
                        <ProductList searchQuery={searchQuery} />
                    ) : (
                        <CartContent />
                    )}
                </section>
            </div>
        </>
    );
}

export default MainSection;
