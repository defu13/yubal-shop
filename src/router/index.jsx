import { createBrowserRouter } from "react-router-dom";
import CartContent from "../components/CartContent/CartContent";
import LoginForm from "../components/LoginForm/LoginForm";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductList from "../components/ProductList/ProductList";
import Layout from "../views/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <ProductList />,
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <CartContent />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/product/:id",
                element: (
                    <ProtectedRoute>
                        <ProductDetails />
                    </ProtectedRoute>
                ),
            },
            {
                path: "*",
                element: <NotFound />,
            }
        ],
    },
]);
