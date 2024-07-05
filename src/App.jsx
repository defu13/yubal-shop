import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";

function App() {
    return (
        <>
            <ProductsProvider>
                <AuthProvider>
                    <CartProvider>
                        <ThemeProvider>
                            <section className="main-section">
                                <RouterProvider router={router} />
                            </section>
                        </ThemeProvider>
                    </CartProvider>
                </AuthProvider>
            </ProductsProvider>
        </>
    );
}

export default App;
