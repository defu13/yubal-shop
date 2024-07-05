import GenericModal from "../GenericModal/GenericModal";
import "./ProductModal.css";
import { useProductsCrud } from "../../hooks/useProductsCrud";
import { toast } from "react-toastify";

const ProductModal = ({
    isOpen,
    onClose,
    formValues,
    handleChange,
    productId,
    isEditMode,
}) => {
    const { createProduct, updateProduct, products } = useProductsCrud();

    const handleSubmit = (e) => {
        e.preventDefault();
        let productToHandle = {
            id: productId,
            title: formValues.title,
            description: formValues.description,
            price: formValues.price,
            category: formValues.category,
            image: formValues.image,
        };
        if (isEditMode) {
            const existingProduct = products.find(product => product.id === productId);
            if(existingProduct) {
                productToHandle.rating = existingProduct.rating;
            }
            console.log(productToHandle);
            updateProduct(productId, productToHandle);
            toast.success("Producto guardado correctamente");
        } else {
            productToHandle.rating = {
                rate: "",
                count: "",
            };
            createProduct(productToHandle);
            toast.success("Producto creado correctamente");
        }
        onClose();
    };

    return (
        <GenericModal isOpen={isOpen} onClose={onClose}>
            <h2>{isEditMode ? "Editar Producto" : "Crear Producto"}</h2>
            <form onSubmit={handleSubmit} className="create-product-form">
                <input
                    className="create-product-input"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    placeholder="Nombre del Producto"
                />
                <textarea
                    className="create-product-input"
                    name="description"
                    value={formValues.description}
                    onChange={handleChange}
                    placeholder="Descripción del producto"
                />
                <input
                    className="create-product-input"
                    name="category"
                    value={formValues.category}
                    onChange={handleChange}
                    placeholder="Categoría"
                />
                <input
                    type="number"
                    className="create-product-input"
                    name="price"
                    value={formValues.price}
                    onChange={handleChange}
                    placeholder="Precio"
                />
                <input
                    className="create-product-input"
                    name="image"
                    value={formValues.image}
                    onChange={handleChange}
                    placeholder="URL de la imagen"
                />
                <button type="submit" className="create-product-button">
                    {isEditMode ? "Guardar" : "Crear"}
                </button>
            </form>
        </GenericModal>
    );
};

export default ProductModal;
