import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { product } from "../data/product";
import Loading from "../components/Loading";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  StarIcon,
} from "lucide-react";
import DummyReviewSection from "../components/DummyReviewSection";
import ProductCart from "../components/ProductCart";
const ProductsPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, addToCart, updateQuantity, removeQuantity } = useCart();
  const [products, setProducts] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localQuantity, setLocalQuantity] = useState(1);
  useEffect(() => {
    setLoading(true);
    setLocalQuantity(1);
    window.scrollTo(0, 0);
    const productFind = product.find((p) => p.id === Number(id));
    setProducts(productFind);
    setRelatedProducts(product.filter((p) => p.id !== id));
    setLoading(false);
  }, [id]);

  if (loading) return <Loading />;
  if (!products) return null;
  const cartItem = items.find((item) => item.product.id === products.id);
  const inCart = !!cartItem;
  const displayQuantity = inCart ? cartItem.quantity : localQuantity;

  const handleMinus = () => {
    if (!inCart) {
      return setLocalQuantity(Math.max(1, localQuantity - 1));
    }
    return cartItem.quantity > 1
      ? updateQuantity(products.id, cartItem.quantity - 1)
      : removeQuantity(Math.max(1, localQuantity - 1));
  };

  const handlePlus = () => {
    if (!inCart) {
      return setLocalQuantity(localQuantity + 1);
    }
    return updateQuantity(products.id, cartItem.quantity + 1);
  };

  const cateoryLabel = products.category.replace(/-/g, " ");
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm text-app-text-light mb-6">
          <Link to="/" className="hover:text-app-green transition-colors">
            <HomeIcon className="size-4" />
          </Link>
          <span>/</span>
          <Link
            to="/products"
            className="hover:text-app-green transition-colors"
          >
            Product
          </Link>
          <span>/</span>
          <Link
            to={`/product?category=${products.category}`}
            className="hover:text-app-green transition-colors capitalize"
          >
            {cateoryLabel}
          </Link>
          <span>/</span>
          <span className="text-app-green font-medium truncate max-w-[200px]">
            {products.name}
          </span>
        </nav>
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-1.5 text-sm text-app-text-light hover:text-app-green transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="size-4" />
          Back
        </button>
        <div className="bg-white/50 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative flex-center p-8 md:p-12 min-h-[320px] md:min-h-[480px]">
              <img
                src={products.image}
                alt={products.name}
                className="max-h-[360px] w-auto object-contain"
              />
              <div className="absolute top-5 left-5 flex flex-wrap gap-1.5">
                {products.discount > 0 && (
                  <span className="px-2.5 py-1 text-xs font-semibold bg-orange-400 text-white rounded-full">
                    {products.discount}% OFF
                  </span>
                )}
              </div>
            </div>
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-medium text-app-text-light tracking-wider mb-2 capitalize">
                {cateoryLabel}
              </span>
              <h1 className="text-2xl md:text-3xl font-semibold text-app-green mb-3">
                {products.name}
              </h1>
              {products.rating > 0 && (
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`w-4 h-4 ${star <= Math.round(products.rating) ? "text-red-200 fill-red-200" : ""}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{products.rating}</span>
                  <span className="text-sm text-app-text-light">
                    ({products.reviewsCount} reviews)
                  </span>
                </div>
              )}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl md:text-4xl font-semibold text-app-green">
                  $ {products.price.toFixed(2)}
                </span>
                {products.originalPrice > products.price && (
                  <span className="text-lg text-app-text-light line-through">
                    ${products.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-app-text-light leading-relaxed mb-6">
                {products.description}
              </p>
              <div className="mb-6">
                {products.stock > 0 ? (
                  <span className="text-sm text-green-700 font-medium">
                    In Stock ({products.stock} available)
                  </span>
                ) : (
                  <span className="text-sm text-red-400 font-medium">
                    Out of Stock
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-app-border rounded-xl overflow-hidden">
                  <button
                    onClick={handleMinus}
                    className="p-3 hover:bg-app-cream transition-colors cursor-pointer"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-semibold min-w-[40px] text-center">
                    {displayQuantity}
                  </span>
                  <button
                    onClick={handlePlus}
                    className="p-3 hover:bg-app-cream transition-colors cursor-pointer"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (!inCart) addToCart(products, localQuantity);
                  }}
                  disabled={products.stock === 0}
                  className="cursor-pointer flex-1 h-12 rounded-xl border border-green-900 text-green-900 font-semibold flex items-center justify-center gap-2 hover:bg-green-900 hover:text-white transition-colors duration-200 active:scale-95"
                >
                  <ShoppingCartIcon className="size-4 shrink-0" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {products.reviewsCount > 0 && <DummyReviewSection product={products} />}
        {relatedProducts.length > 0 && (
          <section className="mt-12 mb-44">
            <div className="flex items-center justify-between mb-6">
              <div className="">
                <h2 className="text-2xl font-semibold text-app-green">
                  Related Products
                </h2>
                <p className="text-sm text-app-text-light mt-1">
                  More from {cateoryLabel}
                </p>
              </div>
              <Link
                to={`/products?category=${products.category}`}
                className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex items-center gap-1 transition-colors"
              >
                View All <ArrowRightIcon className="size-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
              {relatedProducts.slice(0, 3).map((relatedProduct) => (
                <ProductCart key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
export default ProductsPages;
