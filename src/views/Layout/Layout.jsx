import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { useContext, useState } from "react";
import "./Layout.css";

const Layout = () => {
    const { theme } = useContext(ThemeContext);
    const [searchQuery, setSearchQuery] = useState("");

    // Manejador de búsqueda
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <div className="layout">
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    transition={Bounce}
                    theme={theme === "light" ? "dark" : "light"}
                />
                <NavBar onSearch={handleSearch} />
                <Banner />
                <Outlet context={{ searchQuery }} />
                <Footer />
                <ScrollToTopButton />
            </div>
        </>
    );
};

export default Layout;
