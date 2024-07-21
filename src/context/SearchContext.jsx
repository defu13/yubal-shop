import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const products = useSelector((state) => state.products.products);
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
