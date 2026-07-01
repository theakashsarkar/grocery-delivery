import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
const CartSidebar = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();
  const navigate = useNavigate();
  if (!isCartOpen) return null;
  const deliveryFee = cartTotal > 20 ? 0 : 1.99;
  const grandTotal = cartTotal + deliveryFee;
  return (
    <>
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
      ></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-5 border-b border-app-border">
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="size-5" />
            <h2 className="text-lg font-medium">Your Cart</h2>
            <span className="px-2 py-0.5 text-xs font-semibold bg-amber-200 rounded-full">
              {items.length} items
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl hover:bg-app-cream transition-colors  cursor-pointer"
          >
            <XIcon className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBagIcon className="size-16 text-app-border mb-4" />
              <h4 className="text-lg font-medium mb-1">Your cart is empty</h4>
            </div>
          ) : (
            items.map((item) => (
              <div
                className="flex gap-3 bg-app-cream/60 rounded-xl p-3"
                key={item.product._id}
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="size-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-app-text-light">
                    $ {item.product.price.toFixed(2)} / {item.product.unit}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="flex items-center justify-center size-8 rounded-full bg-white shadow-sm hover:shadow transition cursor-pointer"
                      >
                        <MinusIcon className="size-4" />
                      </button>

                      <span className="min-w-10 text-center font-semibold text-gray-800">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="flex items-center justify-center size-8 rounded-full bg-white shadow-sm hover:shadow transition cursor-pointer"
                      >
                        <PlusIcon className="size-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        $ {(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 text-app-text-light hover:text-app-error transition-colors cursor-pointer"
                      >
                        <Trash2Icon className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Delivery</span>

                {deliveryFee === 0 ? (
                  <span className="font-medium text-green-600">Free</span>
                ) : (
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                )}
              </div>

              {deliveryFee > 0 && (
                <div className="rounded-lg bg-orange-50 border border-orange-100 p-2 text-center">
                  <p className="text-xs text-orange-700">
                    Add a little more to get free delivery
                  </p>
                </div>
              )}

              <div className="h-px bg-gray-200" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total</span>

                <span className="text-xl font-bold">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
            >
              Proceed to Checkout
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CartSidebar;
