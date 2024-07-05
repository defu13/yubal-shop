import { useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useProducts } from "../context/ProductsContext";

const API_URL = "http://localhost:3000/products";

export const useProductsCrud = () => {
    // const [products, setProducts] = useState([]);
    const { products, setProducts } = useProducts();
    const defaultImage = "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const createProduct = async (newProduct) => {
        try {
            if(!newProduct.image){
                newProduct.image = defaultImage
            }
            const newId = uuidv4();
            const newProductWithId = { ...newProduct, id: newId };
            const response = await axios.post(API_URL, newProductWithId);
            setProducts((prevProducts) => [...prevProducts, response.data]);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            const response = await axios.put(
                `${API_URL}/${id}`,
                updatedProduct
            );
            const updateProductResponse = response.data;
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === id ? updateProductResponse : product
                )
            );
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product.id !== id)
            );
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return {
        products,
        setProducts,
        createProduct,
        updateProduct,
        deleteProduct,
    };
};
