import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

function App() {
    return (
        <>
            <Provider store={store}>
                <ProductsProvider>
                    <SearchProvider>
                        <AuthProvider>
                            <CartProvider>
                                <ThemeProvider>
                                    <section className="main-section">
                                        <RouterProvider router={router} />
                                    </section>
                                </ThemeProvider>
                            </CartProvider>
                        </AuthProvider>
                    </SearchProvider>
                </ProductsProvider>
            </Provider>
        </>
    );
}

export default App;
