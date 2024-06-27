import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [view, setView] = useState("products");
    // Manejador de búsqueda
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <CartProvider>
                <ThemeProvider>
                    <NavBar onSearch={handleSearch} onViewChange={setView}/>
                    <MainSection searchQuery={searchQuery} view={view} />
                    <Footer />
                    <ScrollToTopButton />
                </ThemeProvider>
            </CartProvider>
        </>
    );
}

export default App;
