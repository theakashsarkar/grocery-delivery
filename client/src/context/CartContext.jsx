import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("app_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("app_cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const isSameProduct = (item) => item.product.id === product.id;
      const existing = prev.find(isSameProduct);
      if (!existing) return [...prev, { product, quantity }];
      return prev.map((item) =>
        isSameProduct(item)
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    setItems([]);
    setIsCartOpen(false);
  };

  const cartCount = items.reduce((sum, items) => sum + items.quantity, 0);
  const cartTotal = items.reduce(
    (sum, items) => sum + items.product.price * items.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("use cart  must be used within Cart Provider");
  return context;
}
