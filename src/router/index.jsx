import { createBrowserRouter } from "react-router-dom";
import CartContent from "../components/CartContent/CartContent";
import LoginForm from "../components/LoginForm/LoginForm";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductList from "../components/ProductList/ProductList";
import Layout from "../views/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../components/NotFound/NotFound";
import PageTransitionWrapper from "../components/PageTransitionWrapper/PageTransitionWrapper";
import { AnimatePresence } from "framer-motion";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <PageTransitionWrapper>
                        <ProductList />
                    </PageTransitionWrapper>
                ),
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <PageTransitionWrapper>
                            <CartContent />
                        </PageTransitionWrapper>
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: (
                    <PageTransitionWrapper>
                        <LoginForm />
                    </PageTransitionWrapper>
                ),
            },
            {
                path: "/product/:id",
                element: (
                    <ProtectedRoute>
                        <PageTransitionWrapper>
                            <ProductDetails />
                        </PageTransitionWrapper>
                    </ProtectedRoute>
                ),
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
