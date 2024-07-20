import { createContext, useContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { products } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, products]);

    const contextValues = {
        searchQuery,
        setSearchQuery,
        filteredProducts,
    };

    return (
        <SearchContext.Provider value={contextValues}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    return context;
};
