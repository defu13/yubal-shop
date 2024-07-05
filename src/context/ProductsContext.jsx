import { createContext, useContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const ProductsContextValues = {
        products,
        setProducts,
    };
    return (
        <ProductsContext.Provider value={ProductsContextValues}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    return context;
};
