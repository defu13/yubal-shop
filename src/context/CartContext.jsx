import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        calculateTotal();
    }, [cartItems]);

    const addToCart = (product) => {
        const itemExists = cartItems.find((item) => item.id === product.id);

        if (itemExists) {
            // Aumentar la cantidad si el item se repite
            const updatedCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            // Añadir producto con cantidad 1
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const calculateTotal = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += item.price * item.quantity; // Multiplicar precio por cantidad
        });
        
        if (total % 1 !== 0) {
            return total.toFixed(2);
        }else{
            return total;
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartContextValues = {
        cartItems,
        addToCart,
        clearCart,
        calculateTotal,
    };

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
};