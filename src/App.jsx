import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Products from "./components/Products/Products.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    // Manejador de búsqueda
    const handleSearch = (query) => {
        setSearchQuery(query);
        toast.success("Búsqueda completada");
    };

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={3000} theme="colored"/>
            <NavBar onSearch={handleSearch} />
            <Products searchQuery={searchQuery} />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default App;
