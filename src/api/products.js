import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3000/products";
const defaultImage = "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png";

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addProduct = async (newProduct) => {
    if (!newProduct.image) {
        newProduct.image = defaultImage;
    }
    const newId = uuidv4();
    const newProductWithId = { ...newProduct, id: newId };
    await axios.post(API_URL, newProductWithId);
    const response = await axios.get(API_URL);
    return response.data;
};

export const editProduct = async (id, updatedProduct) => {
    await axios.put(`${API_URL}/${id}`, updatedProduct);
    const response = await axios.get(API_URL);
    return response.data;
};

export const removeProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    const response = await axios.get(API_URL);
    return response.data;
};