import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import productsData from "../../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../hooks/useCart";
import BackButton from "../BackButton/BackButton";

function ProductDetails() {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const { id } = useParams();
    const productId = parseInt(id, 10);
    const product = productsData.find((p) => p.id === productId);

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
            <div className="product-details-container">
                <BackButton />
                <div className="product-details">
                    {!product ? (
                        <h1>Producto no encontrado</h1>
                    ) : (
                        <>
                            <div className="product-details-image-container">
                                <img
                                    className="product-details-image"
                                    src={product.image}
                                    alt={product.title}
                                />
                            </div>
                            <div className="product-details-info-container">
                                <div>
                                    <p>{product.category}</p>
                                    <h1 className="product-details-title">
                                        {product.title}
                                    </h1>
                                    <p className="product-details-description">
                                        {product.description}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="product-details-price">
                                        {product.price}&nbsp;€
                                    </h2>

                                    <div className="product-details-purchase-container">
                                        <p className="product-details-rating">
                                            {product.rating.rate}&nbsp;
                                            <FontAwesomeIcon icon={faStar} />
                                            &nbsp; ({product.rating.count}{" "}
                                            opiniones)
                                        </p>
                                        <button
                                            className={`product-details-add-button ${
                                                isAdded ? "added-to-cart" : ""
                                            }`}
                                            onClick={handleAddToCart}
                                        >
                                            {isAdded ? (
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={faCheck}
                                                    />
                                                    <p>Agregado a la cesta</p>
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                    />
                                                    <p>Agregar a la cesta</p>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
