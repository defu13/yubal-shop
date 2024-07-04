import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const { setItem, getItem, removeItem } = useLocalStorage("cartItems");

    useEffect(() => {
        const storedCartItems = getItem();
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    },[]);

    const addToCart = (product) => {
        const itemExists = cartItems.find((item) => item.id === product.id);

        if (itemExists) {
            const updatedCart = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCart);
            setItem(updatedCart);
        } else {
            const updatedCart = [...cartItems, { ...product, quantity: 1 }];
            setCartItems(updatedCart);
            setItem(updatedCart);
        }

    };

    const calculateTotal = (cartItems) => {
        let total = 0;

        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        
        if (total % 1 !== 0) {
            return total.toFixed(2);
        }else{
            return total;
        }
    };

    const clearCart = () => {
        setCartItems([]);
        removeItem();
        toast.success("Cesta vaciada");
    };

    const finishOrder = () => {
        setCartItems([]);
        removeItem();
        toast.success("Se le redirigirá a la plataforma de pago");
    }

    const cartContextValues = {
        cartItems,
        addToCart,
        clearCart,
        calculateTotal,
        finishOrder,
    };

    return (
        <CartContext.Provider value={cartContextValues}>
            {children}
        </CartContext.Provider>
    );
};