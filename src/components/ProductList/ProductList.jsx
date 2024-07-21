import ProductCard from "../ProductCard/ProductCard.jsx";
import "./ProductList.css";
import { useAuth } from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "../ProductModal/ProductModal.jsx";
import { useModal } from "../../hooks/useModal.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { useSearch } from "../../context/SearchContext.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts, deleteProduct } from "../../redux/reducers/productsSlice.js";

function ProductList() {
    const dispatch = useDispatch();
    const { filteredProducts } = useSearch();
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
    const loading = useSelector((state) => state.products.loading);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleEdit = (product) => {
        handleOpen(product);
    };

    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId));
    };

    if (loading) {
        return <LoadingSpinner />;
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
                    {":("}
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
