import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import "./CartContent.css";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../LoginForm/LoginForm.jsx";

function CartContent() {
    const { cartItems, calculateTotal } = useContext(CartContext);

    return (
        <div className="cart-content">
            {cartItems.length === 0 ? (
                <div className="cart-container">
                    <h1 className="cart-empty-title">
                        ¡El carrito está vacío!
                    </h1>
                </div>
            ) : (
                <div className="cart-container">
                    <div>
                        <h1 className="cart-title">Cesta de la compra</h1>
                        <p>Revisa tu pedido antes de continuar con tu compra</p>
                    </div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="cart-item-image"
                            />
                            {item.quantity > 1 && (
                                <span className="quantity-bubble">
                                    {item.quantity}
                                </span>
                            )}
                            <div className="cart-item-info">
                                <h2 className="cart-item-title">
                                    {item.title}
                                </h2>
                                <div className="cart-item-price-container">
                                    <p className="cart-item-price-title">
                                        Precio:&nbsp;
                                    </p>
                                    <p className="cart-item-price">
                                        {item.price} €
                                    </p>
                                </div>
                                {item.quantity > 1 && (
                                    <div className="cart-item-price-container">
                                        <p className="cart-item-price-title">
                                            Precio total:&nbsp;
                                        </p>
                                        <p className="cart-item-price">
                                            {item.price * item.quantity} €
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h1 className="cart-total-title">
                            Total: {calculateTotal()} €
                        </h1>
                        <button className="order-button">
                            Realizar compra
                        </button>
                    </div>
                </div>
            )}
            <LoginForm/>
        </div>
    );
}

export default CartContent;
