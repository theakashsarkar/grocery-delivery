import { Plus, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.discount > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-orange-500 text-white rounded-full">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </div>
      <div className="p-3.5 text-zinc-700">
        <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <Star className="size-3 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-medium text-app-text">
              {product.rating}
            </span>
            <span className="text-xs text-app-text-light">
              ({product.reviewsCount})
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 truncate">
            <span className="text-base font-medium">
              ${product.price.toFixed(1)}
            </span>
            <span className="text-xs text-app-text-light line-through ml-1.5">
              ${product.originalPrice.toFixed(1)}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 hover:bg-app-orange-dark transition-colors active:scale-95 cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCart;
