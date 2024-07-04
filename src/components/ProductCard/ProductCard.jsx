import { useEffect, useState } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";

function ProductCard({ product }) {
    const { addToCart } = useCart();
    const { isLoggedIn } = useAuth();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
    };

    useEffect(() => {
        let timer;
        if (isAdded) {
            timer = setTimeout(() => {
                setIsAdded(false);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [isAdded]);

    return (
        <>
            <div className="product-card-container">
                <div className="product-card">
                    <Link
                        to={`/product/${product.id}`}
                        className="product-detail-link"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-description">
                                {product.description}
                            </p>
                            <p className="product-price">
                                {product.price + " €"}
                            </p>
                        </div>
                    </Link>
                    {isLoggedIn && (
                        <button
                            className={`add-to-cart-button ${
                                isAdded ? "added-to-cart" : ""
                            }`}
                            onClick={handleAddToCart}
                        >
                            {isAdded ? (
                                <>
                                    <FontAwesomeIcon icon={faCheck} />
                                    <p>Agregado a la cesta</p>
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPlus} />
                                    <p>Agregar a la cesta</p>
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductCard;
