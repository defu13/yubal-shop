import { createContext, useState } from "react";

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
