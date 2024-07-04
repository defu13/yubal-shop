import { useEffect, useState } from "react";
import productsData from "../data.json";

export const useProductsCrud = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    const createProduct = (newProduct) => {
        setProducts([...products, {...newProduct, id: (Math.random() * 1000)}]);
    }

    const updateProduct = (id, updatedProduct) => {
        setProducts(
            products.map((product) => {
                product.id === id ? {...product, ...updatedProduct} : product;
            })
        );
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    }

    return {
        products,
        createProduct,
        updateProduct,
        deleteProduct
    }
}