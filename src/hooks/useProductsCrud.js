import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useProducts } from "../context/ProductsContext";

const API_URL = "http://localhost:3000/products";

export const useProductsCrud = () => {
    const { products, setProducts } = useProducts();
    const [loading, setLoading] = useState(false);
    const defaultImage =
        "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            // Simular carga lenta
            // setTimeout(() => {
            //     setLoading(false);
            // }, 1000);
            setLoading(false);
        }
    };

    const createProduct = async (newProduct) => {
        setLoading(true);
        try {
            if (!newProduct.image) {
                newProduct.image = defaultImage;
            }
            const newId = uuidv4();
            const newProductWithId = { ...newProduct, id: newId };
            const response = await axios.post(API_URL, newProductWithId);
            // setProducts((prevProducts) => [...prevProducts, response.data]);
            getProducts();
        } catch (error) {
            console.error("Error creating product:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        setLoading(true);
        try {
            const response = await axios.put(
                `${API_URL}/${id}`,
                updatedProduct
            );
            const updateProductResponse = response.data;
            // setProducts((prevProducts) =>
            //     prevProducts.map((product) =>
            //         product.id === id ? updateProductResponse : product
            //     )
            // );
            getProducts();
        } catch (error) {
            console.error("Error updating product:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`${API_URL}/${id}`);
            // setProducts((prevProducts) =>
            //     prevProducts.filter((product) => product.id !== id)
            // );
            getProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        products,
        setProducts,
        createProduct,
        updateProduct,
        deleteProduct,
        loading,
    };
};