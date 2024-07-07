import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import Footer from "../../components/Footer/Footer.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import "./Layout.css";
import { useTheme } from "../../hooks/useTheme.js";
import { SearchProvider } from "../../context/SearchContext.jsx";
import { useProducts } from "../../hooks/useProducts.js";

const Layout = () => {
    const { theme } = useTheme();
    const { products } = useProducts();

    return (
        <>
            <SearchProvider products={products}>
                <div className="layout">
                    <ToastContainer
                        position="bottom-center"
                        autoClose={2000}
                        transition={Bounce}
                        theme={theme === "light" ? "dark" : "light"}
                    />
                    <NavBar />
                    <Banner />
                    <Outlet />
                    <Footer />
                    <ScrollToTopButton />
                </div>
            </SearchProvider>
        </>
    );
};

export default Layout;
