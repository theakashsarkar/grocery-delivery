import { ShoppingCartIcon } from "lucide-react";

const CartButton = ({ cartCount, setIsCartCount }) => {
  return (
    <button
      className="relative p-2 rounded-xl"
      onClick={() => setIsCartCount(true)}
    >
      <ShoppingCartIcon className="size-5 text-zinc-900" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-orange-500 text-white text-[10px] rounded-full flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </button>
  );
};
export default CartButton;
