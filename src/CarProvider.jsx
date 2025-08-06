import { useState, createContext } from "react";

// Create context
export const CartContext = createContext([]);

// Provider component
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}
