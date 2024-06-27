import { useContext } from "react";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);
    const addToCartHandle = () => {
        addToCart(product);
        toast.success("Agregado al carrito");
    }

    return (
        <>
            <div className="product-card-container">
                <div className="product-card">
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
                        <p className="product-price">{product.price + " €"}</p>
                    </div>
                    <button className="add-to-cart-button" onClick={addToCartHandle}>
                        <FontAwesomeIcon icon={faPlus} />
                        <p>Agregar al carrito</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
