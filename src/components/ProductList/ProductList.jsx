import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal.jsx";
import { useModal } from "../../hooks/useModal.js";
import { useProductsCrud } from "../../hooks/useProductsCrud.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

function ProductList() {
    const { searchQuery = "" } = useOutletContext();
    const {
        handleOpen,
        isOpen,
        handleClose,
        formValues,
        handleChange,
        isEditMode,
        productId,
    } = useModal();
    const { user } = useAuth();
    const { deleteProduct, products, loading } = useProductsCrud();

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEdit = (product) => {
        handleOpen(product);
    };

    const handleDelete = (productId) => {
        deleteProduct(productId);
    };

    if(loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="product-list">
            {user.role === "admin" && (
                <>
                    <button
                        className="add-product-button"
                        onClick={() => handleOpen()}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <ProductModal
                        isOpen={isOpen}
                        onClose={handleClose}
                        formValues={formValues}
                        handleChange={handleChange}
                        isEditMode={isEditMode}
                        productId={productId}
                    />
                </>
            )}
            {filteredProducts.length === 0 ? (
                <h1 className="search-message">
                    ¡No se encontraron productos! <br />
                    :(
                </h1>
            ) : (
                filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))
            )}
        </div>
    );
}

export default ProductList;
