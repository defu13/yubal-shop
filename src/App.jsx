import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

function App() {
    return (
        <>
            <AuthProvider>
                <CartProvider>
                    <ThemeProvider>
                        <section className="main-section">
                            <RouterProvider router={router} />
                        </section>
                    </ThemeProvider>
                </CartProvider>
            </AuthProvider>
        </>
    );
}

export default App;
